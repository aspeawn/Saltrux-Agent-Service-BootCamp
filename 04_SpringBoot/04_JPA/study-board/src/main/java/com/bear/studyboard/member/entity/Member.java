package com.bear.studyboard.member.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "members")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email; // 이메일 중복 가입이 안된다.

    @Column(name = "password_Hash", nullable = false)
    @Getter(AccessLevel.NONE) // Getter 접근이 안됨 -> 이 클래스 내부에서 따로 리턴하는 메소드를 만듬
    private String passwordHash;

    @Column(nullable = false, length = 50)
    private String nickname;

    @Column(name = "joined_at", nullable = false, updatable = false)
    private LocalDateTime joinAt;   // 언제 가입했는지

    @Column(name = "withdrawn_at")
    private LocalDateTime drawnAt;

    /*
    * Entity의 수정 같은 경우
    * Setter를 사용하지않고 수정하는 내용을 명시할 수 있는 메소드를 따로 만들어 관리함 -> 개발자가 실수 하는 걸 방지
    * */
    public void updateProfile(String email, String nickname) {
        if(email != null) {
            this.email = email;
        }
        if(nickname != null ) {
            this.nickname = nickname;
        }
    }

    // 첫 회원가입시 사용할 생성자
    public Member(String email, String passwordHash, String nickname, LocalDateTime joinAt) {
        this.id = id;
        this.email = email;
        this.passwordHash = passwordHash;
        this.nickname = nickname;
        this.joinAt = joinAt;
    }

    public String passwordHash() {
        return this.passwordHash;
    }

    public void withdraw(LocalDateTime withdrawnAt) {
        this.drawnAt = withdrawnAt;
    }

}
