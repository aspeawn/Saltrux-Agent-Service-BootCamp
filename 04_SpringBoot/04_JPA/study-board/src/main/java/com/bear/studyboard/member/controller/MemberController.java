package com.bear.studyboard.member.controller;

import com.bear.studyboard.common.dto.ApiResponse;
import com.bear.studyboard.member.dto.*;
import com.bear.studyboard.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;


    // 회원가입
    @PostMapping
    public ResponseEntity<ApiResponse<MemberAccountResponseDTO>> register(
            @RequestBody RegisterMemberRequestDTO request
    ){
        MemberAccountResponseDTO member = memberService.register(request);

        HttpStatus status = HttpStatus.CREATED;
        return ResponseEntity.status(status)
                .body(ApiResponse.of(status, "회원 등록 성공", member));
    }



    // 회원 정보 수정
    // PATCH /api/members/{memberId}
    @PatchMapping("{memberId}")
    public ResponseEntity<ApiResponse<UpdateMemberRequestDTO>> update(
            @PathVariable Long memberId,
            @RequestBody UpdateMemberRequestDTO request
    ){
        UpdateMemberRequestDTO updateMember = memberService.update(memberId, request);

        HttpStatus status = HttpStatus.OK;

        return ResponseEntity.status(status)
                .body(ApiResponse.of(status, "회원 수정 성공", updateMember));
    }


    // 회원 정보 탈퇴
    // 입력값 currentPassword	200 탈퇴 시각이 담긴 회원 계정 정보
    @PostMapping("{memberId}/withdrawl")
    public ResponseEntity<ApiResponse<MemberAccountResponseDTO>> withdraw(
            @PathVariable Long memberId,
            @RequestBody WithdrawMemberRequestDTO request
    ) {
        MemberAccountResponseDTO withdrawMember = memberService.withdraw(memberId, request);

        HttpStatus status = HttpStatus.OK;

        return ResponseEntity.status(status)
                .body(ApiResponse.of(status,"회원 탈퇴 성공", withdrawMember));
    }
}
