package com.bear.studyboard.member.repository;

import com.bear.studyboard.member.entity.Member;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    // 쿼리 메소드
    boolean existsByEmail(String email);

    boolean existsByEmailAndIdNot(String email, Long id);

    Optional<Member> findByEmail(String email);

    Optional<Member> findById(Long memberId);
}
