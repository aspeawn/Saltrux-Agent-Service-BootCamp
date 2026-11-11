package com.bear.studyboard.category.service;

import com.bear.studyboard.category.dto.CategoryResponseDTO;
import com.bear.studyboard.category.entity.Category;
import com.bear.studyboard.category.repository.CategoryRepository;
import com.bear.studyboard.common.dto.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    // {id, name}을 보여주는 메소드
    public List<CategoryResponseDTO> showCategory() {

        // 만약 이 상태로 그대로 응답에 넣을 경우 Category 엔터티 전체가 JSON으로 변환되어
        // 응답에 필요없는 필드 or 연관관계가 의도치않게 노출 될 수 있고 직렬화 문제가 생길 수 있음
        // 따라서 DTO를 사용해서 응답에 사용할 id 필드, name 필드만 골라 담기
//        List<Category> categoryList = categoryRepository.findAllByOrderByNameAsc();

        return categoryRepository.findAllByOrderByNameAsc()
                .stream().map(CategoryResponseDTO::from).toList();
    }
}
