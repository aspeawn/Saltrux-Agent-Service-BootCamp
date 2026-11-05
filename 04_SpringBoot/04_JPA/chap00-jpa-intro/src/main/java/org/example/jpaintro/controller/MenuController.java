package org.example.jpaintro.controller;

import lombok.RequiredArgsConstructor;
import org.example.jpaintro.dto.MenuRequestDTO;
import org.example.jpaintro.dto.MenuResponseDTO;
import org.example.jpaintro.service.MenuService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menus")
@RequiredArgsConstructor    // 초기화가 필요한 필드만 생성자로 만들어주는 어노테이션
public class MenuController {

    private final MenuService menuService;

    // 전체조회
    @GetMapping
    public List<MenuResponseDTO> findAll() {
       return menuService.findAll();
    }

    // menu 저장
    @PostMapping
    public MenuResponseDTO create(@RequestBody MenuResponseDTO menuResponseDTO) {

        return menuService.create(menuResponseDTO);
    }

    @PutMapping("/{menuCode}")
    public MenuResponseDTO update(@PathVariable Integer menuCode, @RequestBody MenuRequestDTO menuRequestDTO){

        return menuService.update(menuCode, menuRequestDTO);
    }
}
