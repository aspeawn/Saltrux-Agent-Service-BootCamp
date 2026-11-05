package org.example.jpaintro.service;

import lombok.RequiredArgsConstructor;
import org.example.jpaintro.dto.MenuRequestDTO;
import org.example.jpaintro.dto.MenuResponseDTO;
import org.example.jpaintro.entity.Menu;
import org.example.jpaintro.repository.MenuRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;

    public List<MenuResponseDTO> findAll() {

        // 데이터베이스에서 조회가됨!
        List<Menu> menuList = menuRepository.findAll();

        List<MenuResponseDTO> list = menuList.stream()
                .map(menu-> MenuResponseDTO.from(menu))
                .toList();

        return list;
    }

    @Transactional
    public MenuResponseDTO create(MenuResponseDTO requset) {
        Menu menu = new Menu(
                requset.getMenuName(),
                requset.getMenuPrice(),
                requset.getMenuCode(),
                requset.getOrderableStatus()
        );
        // DB에 저장!
        Menu savedMenu = menuRepository.save(menu);

        return MenuResponseDTO.from(savedMenu);
    }

    @Transactional
    public MenuResponseDTO update(Integer menuCode, MenuRequestDTO request) {

        // id로 수정할 메뉴 찾아오기 (조회) -> 영속성 컨텍스트에서 관리 -> Entity Manager가 조회 시 스냅샷을 찍고, 다시 조회할 때 더티체킹을해 변경된 내용만 Check
        Menu menu = menuRepository.findById(menuCode)
                    .orElseThrow(
                            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "메뉴를 찾을 수 없습니다."));
        menu.change(
                request.getMenuName(),
                request.getMenuPrice(),
                request.getCategoryCode(),
                request.getOrderableStatus());

        return MenuResponseDTO.from(menu);
    }
}
