package com.bear.studyboard.post.service;

import com.bear.studyboard.common.dto.PageResponseDTO;
import com.bear.studyboard.post.dto.PostListItemResponseDTO;
import com.bear.studyboard.post.repository.StudyPostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class StudyPostService {

    private final StudyPostRepository studyPostRepository;

    public PageResponseDTO<PostListItemResponseDTO> findPosts(Pageable pageable) {

        /*
        * PageRequest : Pageable 인터페이스의 대표 구현체
        * PageRequest.of(페이지 번호, 페이지 크기)
        * PageRequest.of(페이지 번호, 페이지 크기, 정렬)
        * */

        Pageable pageRequest = PageRequest.of(
                pageable.getPageNumber(),
                pageable.getPageSize(),
                Sort.by(Sort.Direction.DESC, "createdAt", "id")
        );

        // Page로 래핑된 DTO Projection
        Page<PostListItemResponseDTO> posts = studyPostRepository.findPostPage(pageRequest);

        return PageResponseDTO.from(posts);
    }
}
