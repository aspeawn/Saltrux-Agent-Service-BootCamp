package com.bear.studyboard.category.dto;

import com.bear.studyboard.category.entity.Category;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CategoryResponseDTO {
    private Long id;
    private String name;

    public static CategoryResponseDTO from(Category category){

        return new CategoryResponseDTO(category.getId(), category.getName());
    }
}
