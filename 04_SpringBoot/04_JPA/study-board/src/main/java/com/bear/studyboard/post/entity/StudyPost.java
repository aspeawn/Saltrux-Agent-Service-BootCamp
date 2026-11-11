package com.bear.studyboard.post.entity;

import com.bear.studyboard.category.entity.Category;
import com.bear.studyboard.member.entity.Member;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "study_posts")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class StudyPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "author_id", nullable = false)
    private Member author;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false)
    private String body;

    @Column(name="reference_url", length = 2048)
    private String refUrl;

    @Column(name="created_at", nullable = false, length = 6)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false, length = 6)
    private LocalDateTime updatedAt;

    public static StudyPost create(
            Member author,
            Category category,
            String title,
            String body,
            String refUrl
    ) {
        StudyPost post = new StudyPost();
        post.author = author;
        post.category = category;
        post.title = title;
        post.body = body;
        if(refUrl != null) post.refUrl = refUrl;    // 없으면 생략됨
        post.createdAt = LocalDateTime.now();
        post.updatedAt = post.createdAt;
        return post;
    }

    public void update(String title, String body, Category category, String refUrl) {
        if (title != null) this.title = title;
        if (body != null) this.body = body;
        if (category != null) this.category = category;
        if (refUrl != null) this.refUrl = refUrl;

        this.updatedAt = LocalDateTime.now();
    }

    public void changeRefUrl(String refUrl) {
        this.refUrl = refUrl;
    }
}
