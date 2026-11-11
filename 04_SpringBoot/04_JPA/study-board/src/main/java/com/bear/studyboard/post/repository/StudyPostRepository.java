package com.bear.studyboard.post.repository;


import com.bear.studyboard.category.entity.Category;
import com.bear.studyboard.member.entity.Member;
import com.bear.studyboard.post.dto.PostListItemResponseDTO;
import com.bear.studyboard.post.entity.StudyPost;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudyPostRepository extends JpaRepository <StudyPost, Long> {

    /*
    * Repository 메소드의 마지막 파라미터로 Pageable을 받으면 Spring Data가 페이징처리를 해준다.
    *
    * */

    @Query(value= """
            select new com.bear.studyboard.post.dto.PostListItemResponseDTO(
                post.createdAt, author.nickname, post.title 
            )
            from StudyPost post           
            join post.author author
            """, countQuery = "select count(post) from StudyPost post")
    Page<PostListItemResponseDTO> findPostPage(Pageable pageRequest);
}
