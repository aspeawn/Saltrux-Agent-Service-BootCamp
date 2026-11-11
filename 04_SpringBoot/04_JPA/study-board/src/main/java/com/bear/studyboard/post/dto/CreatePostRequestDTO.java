package com.bear.studyboard.post.dto;

import com.bear.studyboard.category.entity.Category;
import com.bear.studyboard.member.entity.Member;
import com.bear.studyboard.post.entity.StudyPost;
import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CreatePostRequestDTO {
    private String title;
    private String body;
    private Long categoryId;
    private String categoryName;
    private Long authorId;
    private String authorNickname;
    private String refUrl;

    public CreatePostRequestDTO(String title, String body, String authorNickname, String refUrl, String categoryName) {
        this.title = title;
        this.body = body;
        this.authorNickname = authorNickname;
        this.refUrl = refUrl;
        this.categoryName = categoryName;
    }

    public static CreatePostRequestDTO from(StudyPost post) {
        Category category = post.getCategory();
        Member member = post.getAuthor();

        return new CreatePostRequestDTO(
                post.getTitle(),
                post.getBody(),
                category.getName(),
                member.getNickname(),
                post.getRefUrl()
        );
    }
}
