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

}
