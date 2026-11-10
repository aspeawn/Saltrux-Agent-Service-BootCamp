package com.bear.studyboard.common.dto;

import com.bear.studyboard.post.dto.PostListItemResponseDTO;
import lombok.*;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PageResponseDTO<T> {

    private List<T> items;
    private int page;
    private int size;
    private long totalElements;

    public static <T> PageResponseDTO<T> from(Page<T> page) {
        return new PageResponseDTO<>(
                page.getContent(),
                page.getNumber(),
                page.getSize(),
                page.getTotalElements());
    }
}
