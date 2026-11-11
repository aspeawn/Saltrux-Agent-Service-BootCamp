package com.bear.studyboard.category.controller;

import com.bear.studyboard.category.dto.CategoryResponseDTO;
import com.bear.studyboard.category.entity.Category;
import com.bear.studyboard.category.service.CategoryService;
import com.bear.studyboard.common.dto.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<CategoryResponseDTO>>> showCategory() {

        List<CategoryResponseDTO> categories = categoryService.showCategory();

        return ResponseEntity.ok(
                ApiResponse.of(HttpStatus.OK, "카테고리 조회 성공", categories)
        );
    }
}
