package com.bear.studyboard.member.dto;

import com.bear.studyboard.member.entity.Member;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UpdateMemberRequestDTO {
    private String currentPassword;
    private String email;
    private String nickname;

    public static UpdateMemberRequestDTO from(Member member) {
        return new UpdateMemberRequestDTO(member.passwordHash(), member.getEmail(), member.getNickname());
    }
}
