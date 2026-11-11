package com.bear.studyboard.comment.controller;

import com.bear.studyboard.comment.dto.CommentDetailResponseDTO;
import com.bear.studyboard.comment.dto.UpdateCommentRequestDTO;
import com.bear.studyboard.comment.service.CommentService;
import com.bear.studyboard.common.dto.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;


    // 댓글 수정
    @PatchMapping("/{commentId}")
    public ResponseEntity<ApiResponse<CommentDetailResponseDTO>> updateComment(
            @PathVariable Long commentId,
            @RequestBody UpdateCommentRequestDTO request
    ) {
        CommentDetailResponseDTO updatedComment = commentService.update(commentId, request);

        return ResponseEntity.ok(ApiResponse.of(HttpStatus.OK, "댓글 수정 완료", updatedComment));
    }


    // 댓글 삭제
    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(
            @PathVariable Long commentId
    ) {
        commentService.delete(commentId);
        return ResponseEntity.noContent().build();
    }

}
