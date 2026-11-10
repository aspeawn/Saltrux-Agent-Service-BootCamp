package com.bear.studyboard.comment.entity;

import com.bear.studyboard.member.entity.Member;
import com.bear.studyboard.post.entity.StudyPost;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "comments")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "study_post_id", nullable = false)
    private StudyPost studyPost;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "author_id", nullable = false)
    private Member author;

    @Column(nullable = false, length = 1000)
    private String body;

    @Column(name = "created_at", nullable = false, length = 6, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false, length = 6)
    private LocalDateTime updatedAt;
}
