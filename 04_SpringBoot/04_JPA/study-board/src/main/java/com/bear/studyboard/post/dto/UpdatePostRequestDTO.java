package com.bear.studyboard.post.dto;

import com.bear.studyboard.category.entity.Category;
import com.bear.studyboard.member.entity.Member;
import com.bear.studyboard.post.entity.StudyPost;
import lombok.*;

import java.time.LocalDateTime;

@Getter

@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UpdatePostRequestDTO {
    private String title;
    private String body;
    private Long categoryId;
    private Long authorId;
    private String refUrl;
    private boolean refUrlSpecified;
    private LocalDateTime updatedAt;

    public UpdatePostRequestDTO(String title, String body, Long categoryId, Long authorId, String refUrl, LocalDateTime updatedAt) {
        this.title = title;
        this.body = body;
        this.categoryId = categoryId;
        this.authorId = authorId;
        this.refUrl = refUrl;
        this.updatedAt = updatedAt;
    }

    public static UpdatePostRequestDTO from(StudyPost post){
        Category category = post.getCategory();
        Member member = post.getAuthor();

        return new UpdatePostRequestDTO(
                post.getTitle(),
                post.getBody(),
                category.getId(),
                member.getId(),
                post.getRefUrl(),
                post.getUpdatedAt()
        );
    }

    public void setRefUrl(String refUrl) {
        this.refUrl = refUrl;
        this.refUrlSpecified = true;
    }

}
