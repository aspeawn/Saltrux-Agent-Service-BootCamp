package com.bear.studyboard.comment.service;

import com.bear.studyboard.comment.dto.CommentDetailResponseDTO;
import com.bear.studyboard.comment.dto.CommentListItemResponseDTO;
import com.bear.studyboard.comment.dto.CreateCommentsRequestDTO;
//import com.bear.studyboard.comment.dto.FindCommentsRequestDTO;
import com.bear.studyboard.comment.dto.UpdateCommentRequestDTO;
import com.bear.studyboard.comment.entity.Comment;
import com.bear.studyboard.comment.repository.CommentRepository;
import com.bear.studyboard.common.dto.PageResponseDTO;
import com.bear.studyboard.common.error.BusinessException;
import com.bear.studyboard.common.error.ErrorCode;
import com.bear.studyboard.member.entity.Member;
import com.bear.studyboard.member.repository.MemberRepository;
import com.bear.studyboard.post.entity.StudyPost;
import com.bear.studyboard.post.repository.StudyPostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final MemberRepository memberRepository;
    private final StudyPostRepository studyPostRepository;


    // 댓글 등록
    @Transactional
    public CommentDetailResponseDTO create(Long postId, CreateCommentsRequestDTO request) {

        StudyPost post = studyPostRepository.findById(postId)
                .orElseThrow(()-> new BusinessException(ErrorCode.POST_NOT_FOUND));

        Member author = memberRepository.findById(request.getAuthorId())
                .orElseThrow(() -> new BusinessException(ErrorCode.USER_NOT_FOUND));

        Comment comment = Comment.create(author, post, request.getBody());
        Comment savedComment = commentRepository.save(comment);

        return CommentDetailResponseDTO.from(savedComment);
    }


    // 댓글 조회
    @Transactional(readOnly = true)
    public PageResponseDTO<CommentListItemResponseDTO> findComments(Long postId, Pageable pageable) {

        StudyPost post = studyPostRepository.findById(postId)
                .orElseThrow(()-> new BusinessException(ErrorCode.POST_NOT_FOUND));

        Pageable pageRequest = PageRequest.of(
                pageable.getPageNumber(),
                pageable.getPageSize(),
                Sort.by(Sort.Direction.ASC, "createdAt", "id")
        );

        Page<CommentListItemResponseDTO> comments = commentRepository.findCommentPage(post.getId(), pageRequest);

        return PageResponseDTO.from(comments);
    }

    // 댓글 수정
    @Transactional
    public CommentDetailResponseDTO update(Long commentId, UpdateCommentRequestDTO request) {

        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new BusinessException(ErrorCode.COMMENT_NOT_FOUND));

        if(!Objects.equals(comment.getAuthor().getId(), request.getAuthorId()))
            throw new BusinessException(ErrorCode.INVALID_USER_ID);

        comment.update(request.getBody());

        return CommentDetailResponseDTO.from(comment);
    }

    // 댓글 삭제
    @Transactional
    public void delete(Long commentId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new BusinessException(ErrorCode.COMMENT_NOT_FOUND));

        commentRepository.delete(comment);
    }
}
