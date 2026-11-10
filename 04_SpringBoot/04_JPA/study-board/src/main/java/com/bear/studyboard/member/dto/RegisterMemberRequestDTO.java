package com.bear.studyboard.member.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RegisterMemberRequestDTO {

    private String email;
    private String nickname;

    @ToString.Exclude
    private String password;
}
