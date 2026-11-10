package com.bear.studyboard.post.dto;

import com.bear.studyboard.common.dto.PageResponseDTO;
import lombok.*;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PostListItemResponseDTO {

    private LocalDateTime createdAt;
    private String authorName;
    private String title;

    /*
    * Page -> pageable, sort 정보등도 포함하고 있음
    * 이 내용들이 출력되지 않도록 클라이언트에서 피룡한 내용들만 PageResponseDTO로 분리해서 사용
    * */
    public static <T> PageResponseDTO<T> from(Page<T> page) {
        return  new PageResponseDTO<>(
                page.getContent(),
                page.getNumber(),
                page.getSize(),
                page.getTotalElements()
        );
    }
}
