package com.bear.studyboard.comment.dto;

import com.bear.studyboard.comment.entity.Comment;
import com.bear.studyboard.member.dto.UpdateMemberRequestDTO;
import com.bear.studyboard.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UpdateCommentRequestDTO {
    private Long authorId;
    private String body;

    public static UpdateCommentRequestDTO from(Comment comment) {
        Member member = comment.getAuthor();
        return new UpdateCommentRequestDTO(member.getId(),comment.getBody());
    }
}
