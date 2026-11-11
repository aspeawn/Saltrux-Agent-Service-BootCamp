package com.bear.studyboard.member.service;

import com.bear.studyboard.common.error.BusinessException;
import com.bear.studyboard.common.error.ErrorCode;
import com.bear.studyboard.member.dto.*;
import com.bear.studyboard.member.entity.Member;
import com.bear.studyboard.member.repository.MemberRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }



    public MemberAccountResponseDTO register(RegisterMemberRequestDTO request) {
        // 회원가입 - email은 unique
        if(memberRepository.existsByEmail(request.getEmail())) {
            throw new BusinessException(ErrorCode.MEMBER_EMAIL_DUPLICATE);
        }

        // 패스워드를 암호화
        // BCrypt : 무작위 솔트(정렬)을 만들고, 솔트와 입력 비밀번호로 해시를 계산한다.
        // 같은 비밀번호로 가입해도 솔트가 다르면 해시가 달라짐 -> 반환문자열에 솔트와 해시가 함께 들어감(이걸 DB에 저장)
        String passwordHash = encodeNewPassword(request.getPassword());
        System.out.println("passwordHash = " + passwordHash);

        Member member = new Member(request.getEmail(), passwordHash, request.getNickname(), LocalDateTime.now());

        Member savedMember = memberRepository.saveAndFlush(member);  // 저장된 객체(영속)

        return MemberAccountResponseDTO.from(savedMember);
    }

    public String encodeNewPassword(String password) {
        try {
            return passwordEncoder.encode(password);
        } catch (IllegalArgumentException exception) {
            throw new BusinessException(ErrorCode.INVALID_INPUT, "비밀번호는 UTF-8 기준 72바이트 이하이어야합니다.");
        }
    }

    // 로그인 메소드
    public MemberAccountResponseDTO login(LoginMemberRequestDTO request) {

        String email = request.getEmail();

        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new BusinessException(ErrorCode.LOGIN_FAILED));

        if(member.getDrawnAt() != null) {
            throw new BusinessException(ErrorCode.MEMBER_WITHDRAWN);
        }

        // matches(입력비밀번호, 저장된해시값)하면 저장된 해시의 salt값을 꺼내 입력된 비밀번호랑 비교
        if (request.getPassword() == null || !passwordEncoder.matches(request.getPassword(), member.passwordHash())) {

            throw new BusinessException(ErrorCode.LOGIN_FAILED);
        }

        return MemberAccountResponseDTO.from(member);
    }


    // 회원정보 수정 메소드
    @Transactional
    public UpdateMemberRequestDTO update(Long memberId, UpdateMemberRequestDTO request) {

        // 회원 Id에 맞는 정보 조회
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new BusinessException(ErrorCode.USER_NOT_FOUND));

        // 현재 비밀번호가 일치하지 않으면 로그인 실패
        if (request.getCurrentPassword() == null
                || !passwordEncoder.matches(request.getCurrentPassword(), member.passwordHash())) {
            throw new BusinessException(ErrorCode.LOGIN_FAILED);
        }

        // 이메일 수정 시 중복 이메일 작성 방지
        if(request.getEmail() != null
            && memberRepository.existsByEmailAndIdNot(request.getEmail(), memberId)) {
            throw new BusinessException(ErrorCode.MEMBER_EMAIL_DUPLICATE);
        }

        // member 엔티티 메소드 써서 프로필 정보 최신화

        member.updateProfile(request.getEmail(), request.getNickname());

        return UpdateMemberRequestDTO.from(member);
    }


    // 회원 탈퇴 메소드
    @Transactional
    public MemberAccountResponseDTO withdraw(Long memberId, WithdrawMemberRequestDTO request) {

        // 회원 Id에 맞는 정보 조회
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new BusinessException(ErrorCode.USER_NOT_FOUND));

        // 현재 비밀번호 확인
        if (request.getCurrentPassword() == null
                || !passwordEncoder.matches(request.getCurrentPassword(), member.passwordHash())) {
            throw new BusinessException(ErrorCode.LOGIN_FAILED);
        }

        // 이미 탈퇴한 회원일 경우 예외
        if(member.getDrawnAt()!=null)
            throw new BusinessException(ErrorCode.MEMBER_WITHDRAWN);

        // 탈퇴 시각 저장
        member.withdraw(LocalDateTime.now());
        return MemberAccountResponseDTO.from(member);
    }
}
