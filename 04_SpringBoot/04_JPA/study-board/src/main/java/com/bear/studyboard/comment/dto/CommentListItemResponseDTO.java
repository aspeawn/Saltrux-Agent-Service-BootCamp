package com.bear.studyboard.comment.dto;

import com.bear.studyboard.comment.entity.Comment;
import com.bear.studyboard.common.dto.PageResponseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CommentListItemResponseDTO {
    private Long commentId;
    private String postTitle;
    private String authorNickname;
    private String body;
    private LocalDateTime createdAt;

    public static CommentListItemResponseDTO from(Comment comment) {
        return new CommentListItemResponseDTO(
                comment.getId(),
                comment.getStudyPost().getTitle(),
                comment.getAuthor().getNickname(),
                comment.getBody(),
                comment.getCreatedAt()
        );
    }
}
