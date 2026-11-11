package com.bear.studyboard.comment.repository;


import com.bear.studyboard.comment.dto.CommentListItemResponseDTO;
import com.bear.studyboard.comment.entity.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

public interface CommentRepository extends JpaRepository <Comment, Long> {

    @Query(value = """
        select new com.bear.studyboard.comment.dto.CommentListItemResponseDTO(
            comment.id, post.title, author.nickname, comment.body, comment.createdAt
        )
        from Comment comment
        join comment.author author
        join comment.studyPost post
        where post.id = :postId
""",
    countQuery = """
        select count(comment)
        from Comment comment
        where comment.studyPost.id = :postId
        """
    )
    Page<CommentListItemResponseDTO> findCommentPage(
            @RequestParam("postId") Long postId,
            Pageable pageRequest);
}
