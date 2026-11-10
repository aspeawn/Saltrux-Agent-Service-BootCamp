package com.bear.studyboard.member.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class WithdrawMemberRequestDTO {
    private String currentPassword;
}
