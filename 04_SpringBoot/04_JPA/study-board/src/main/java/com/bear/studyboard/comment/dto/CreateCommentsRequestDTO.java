package com.bear.studyboard.comment.dto;

import com.bear.studyboard.comment.entity.Comment;
import com.bear.studyboard.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CreateCommentsRequestDTO {
    private Long authorId;
    private String body;

    public static CreateCommentsRequestDTO from(Comment comment) {
        Member member = comment.getAuthor();

        return new CreateCommentsRequestDTO(member.getId(), comment.getBody());
    }
}
