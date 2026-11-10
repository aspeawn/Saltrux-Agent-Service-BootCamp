package com.bear.studyboard.post.controller;

import com.bear.studyboard.common.dto.ApiResponse;
import com.bear.studyboard.common.dto.PageResponseDTO;
import com.bear.studyboard.post.dto.PostListItemResponseDTO;
import com.bear.studyboard.post.service.StudyPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class StudyPostController {

    private final StudyPostService studyPostService;

    /*
    * 페이징(Paging)
    * - 데이터를 전부 주지 않고 몇번째 페이지를 하넙ㄴ에 몇페이지씩 나누어 주는 방식
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
}
