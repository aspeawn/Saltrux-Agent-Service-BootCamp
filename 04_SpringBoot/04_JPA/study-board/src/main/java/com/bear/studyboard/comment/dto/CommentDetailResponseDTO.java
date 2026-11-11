package com.bear.studyboard.comment.dto;

import com.bear.studyboard.comment.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CommentDetailResponseDTO {

    private String authorNickname;
    private String postTitle;
    private String body;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static CommentDetailResponseDTO from(Comment savedComment) {
        return new CommentDetailResponseDTO(
                savedComment.getAuthor().getNickname(),
                savedComment.getStudyPost().getTitle(),
                savedComment.getBody(),
                savedComment.getCreatedAt(),
                savedComment.getUpdatedAt()
        );
    }
}
