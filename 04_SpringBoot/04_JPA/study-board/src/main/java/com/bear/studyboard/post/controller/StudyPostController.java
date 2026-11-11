package com.bear.studyboard.post.controller;

import com.bear.studyboard.comment.dto.CommentDetailResponseDTO;
import com.bear.studyboard.comment.dto.CommentListItemResponseDTO;
import com.bear.studyboard.comment.dto.CreateCommentsRequestDTO;
import com.bear.studyboard.comment.service.CommentService;
import com.bear.studyboard.common.dto.ApiResponse;
import com.bear.studyboard.common.dto.PageResponseDTO;
import com.bear.studyboard.post.dto.CreatePostRequestDTO;
import com.bear.studyboard.post.dto.PostDetailResponseDTO;
import com.bear.studyboard.post.dto.PostListItemResponseDTO;
import com.bear.studyboard.post.dto.UpdatePostRequestDTO;
import com.bear.studyboard.post.service.StudyPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class StudyPostController {

    private final StudyPostService studyPostService;
    private final CommentService commentService;

    /*
    * 페이징(Paging)
    * - 데이터를 전부 주지 않고 몇번째 페이지를 한번에 몇페이지씩 나누어 주는 방식
    *
    * Pageable -> 페이지 번호, 페이지 크기, 정렬 정보
    * - Spring Data가 제공하는 "페이지 요청 정보" 인터페이스
    * - /api/posts?page=1&size=10&sort=createdAt,desc
    * page -> 페이지 번호(0부터)
    * size -> 한번에 담을 개수
    * sort -> 정렬 기준
    * */
    // 게시글 목록 조회
    @GetMapping()
    public ResponseEntity<ApiResponse<PageResponseDTO<PostListItemResponseDTO>>> findPosts(
            @PageableDefault(size = 20) Pageable pageable
    ) {
            PageResponseDTO<PostListItemResponseDTO> postPage = studyPostService.findPosts(pageable);
        return ResponseEntity.ok(ApiResponse.of(HttpStatus.OK, "게시물 목록조회 완료", postPage));
    }

    // 게시글 목록 등록
    @PostMapping
    public ResponseEntity<ApiResponse<PostDetailResponseDTO>> createPost(
            @RequestBody CreatePostRequestDTO request) {
        PostDetailResponseDTO post = studyPostService.createPost(request);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(ApiResponse.of(HttpStatus.CREATED, "게시글 등록 완료", post));
    }

    // 자료 상세 조회
    @GetMapping("/{postId}")
    public ResponseEntity<ApiResponse<PostDetailResponseDTO>> getPostDetail(
            @PathVariable Long postId) {

        PostDetailResponseDTO post = studyPostService.getPostDetail(postId);

        return ResponseEntity.ok(ApiResponse.of(HttpStatus.OK, "게시물 상세 조회", post));
    }

    // 자료 수정
    @PatchMapping("/{postId}")
    public ResponseEntity<ApiResponse<PostDetailResponseDTO>> updatePost(
            @PathVariable Long postId,
            @RequestBody UpdatePostRequestDTO request
    ) {
        PostDetailResponseDTO post = studyPostService.updatePost(postId, request);
        return ResponseEntity.ok(ApiResponse.of(HttpStatus.OK, "게시물 수정 완료", post));
    }

    // 댓글 등록
    @PostMapping("/{postId}/comments")
    public ResponseEntity<ApiResponse<CommentDetailResponseDTO>> createComment(
            @PathVariable Long postId,
            @RequestBody CreateCommentsRequestDTO request
    ) {
        CommentDetailResponseDTO comment = commentService.create(postId, request);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.of(HttpStatus.CREATED, "댓글 등록 성공", comment));
    }

    // 댓글 조회
    @GetMapping("/{postId}/comments")
    public ResponseEntity<ApiResponse<PageResponseDTO<CommentListItemResponseDTO>>> findComment(
            @PathVariable Long postId,
            @PageableDefault(size = 20) Pageable pageable
    ) {
        PageResponseDTO<CommentListItemResponseDTO> comments = commentService.findComments(postId, pageable);

        return ResponseEntity.ok(ApiResponse.of(HttpStatus.OK, "댓글 조회 성공", comments));
    }
}
