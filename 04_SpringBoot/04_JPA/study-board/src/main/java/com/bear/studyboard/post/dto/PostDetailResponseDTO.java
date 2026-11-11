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
public class PostDetailResponseDTO {
    private String title;
    private String body;
    private String categoryName;
    private String authorNickname;
    private String refUrl;
    private LocalDateTime updatedAt;

    public static PostDetailResponseDTO from(StudyPost post){
        Category category = post.getCategory();
        Member member = post.getAuthor();

        return new PostDetailResponseDTO(
                post.getTitle(),
                post.getBody(),
                category.getName(),
                member.getNickname(),
                post.getRefUrl(),
                post.getUpdatedAt()
        );
    }

}
