package com.bear.studyboard.post.service;

import com.bear.studyboard.category.entity.Category;
import com.bear.studyboard.category.repository.CategoryRepository;
import com.bear.studyboard.common.dto.PageResponseDTO;
import com.bear.studyboard.common.error.BusinessException;
import com.bear.studyboard.common.error.ErrorCode;
import com.bear.studyboard.member.entity.Member;
import com.bear.studyboard.member.repository.MemberRepository;
import com.bear.studyboard.post.dto.CreatePostRequestDTO;
import com.bear.studyboard.post.dto.PostDetailResponseDTO;
import com.bear.studyboard.post.dto.PostListItemResponseDTO;
import com.bear.studyboard.post.dto.UpdatePostRequestDTO;
import com.bear.studyboard.post.entity.StudyPost;
import com.bear.studyboard.post.repository.StudyPostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
public class StudyPostService {

    private final StudyPostRepository studyPostRepository;
    private final CategoryRepository categoryRepository;
    private final MemberRepository memberRepository;


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

    // 게시물 등록 메소드
    @Transactional
    public PostDetailResponseDTO createPost(CreatePostRequestDTO request) {
        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new BusinessException(ErrorCode.CATEGORY_NOT_FOUND));

        Member author = memberRepository.findById(request.getAuthorId())
                .orElseThrow(() -> new BusinessException(ErrorCode.USER_NOT_FOUND));

        StudyPost post = StudyPost.create(
                author,
                category,
                request.getTitle(),
                request.getBody(),
                request.getRefUrl()
        );

        StudyPost savedPost = studyPostRepository.save(post);
        return PostDetailResponseDTO.from(savedPost);
    }

    // 게시물 상세 조회
    @Transactional(readOnly = true)
    public PostDetailResponseDTO getPostDetail(Long postId) {

        StudyPost post = studyPostRepository.findById(postId)
                .orElseThrow(() -> new BusinessException(ErrorCode.POST_NOT_FOUND));

        // 영속성컨텍스트가 조회와동시에 사라졌기때문에
        System.out.println("post.getAuthor().getNickname() = " + post.getAuthor().getNickname());
        
        return PostDetailResponseDTO.from(post);
    }

    // 게시물 수정
    @Transactional
    public PostDetailResponseDTO updatePost(Long postId, UpdatePostRequestDTO request) {

        StudyPost post = studyPostRepository.findById(postId)
                .orElseThrow(() -> new BusinessException(ErrorCode.POST_NOT_FOUND));

        // 사용자가 입력한 카테고리가 없을 떄 예외
        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new BusinessException(ErrorCode.CATEGORY_NOT_FOUND));


        // getRefUrl == null만으로는 해당 필드를 생략해서 null인지, 요청에서 null을 명시해서 null인지 구분 불가능!
        // 명시되었으면 해당 url로
        // setRefUrl -> Json으로 사용자가 요청후 RequestDTO 변환될 때 Setter 실행
        // changeRefUrl -> 서비스가 조회한 엔티티 post를 수정할 때 실행
        if(request.isRefUrlSpecified()) {
            post.changeRefUrl(request.getRefUrl());
        }

        post.update(request.getTitle(), request.getBody(),category, request.getRefUrl());
        return PostDetailResponseDTO.from(post);
    }
}
