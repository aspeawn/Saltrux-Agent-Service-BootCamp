package org.example.jpaintro.service;

import lombok.RequiredArgsConstructor;
import org.example.jpaintro.dto.*;
import org.example.jpaintro.entity.Category;
import org.example.jpaintro.entity.Menu;
import org.example.jpaintro.repository.CategoryRepository;
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
    private final CategoryRepository categoryRepository;

    /*
    * Transactional(readOnly = true)
    * - 이 트랜재션이 데이터를 변경하지 않고 조회만 한다는 의도를 Hibernate에게 알려주는 설정
    *
    * 붙였을 때의 이점
    * 1. Hibernate가 조회 결과 엔티티의 변경 감지를 위한 작업을 줄일 수 있음.
    * 2. 트랜잭션이 끝났을 때 불필요한 Flush가 발생하지 않도록 함
    * 3. 코드를 읽는 개발자한테 이 메소드가 조회전용이라는 의도를 전달
    * 4. 메소드가 실행되는 동안 영속성 컨텍스트를 유지 (여러 조회로 일관된 범위로 처리 가능)
    *   -> LAZY도 안전하게 조회됨
    *
    * 주의할점 : select를 강제하는 기능은 아니므로 코드 작성 시 유의해야함 !
    * */
    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findAll() {
        return menuRepository.findAllWithCategory().stream()
                .map(MenuResponseDTO::from)
                .toList();
    }

    @Transactional
    public MenuResponseDTO create(MenuRequestDTO request) {
        Category category = findCategory(request.getCategoryCode());
        Menu menu = new Menu(
                request.getMenuName(),
                request.getMenuPrice(),
                category,
                request.getOrderableStatus()
        );

        Menu savedMenu = menuRepository.save(menu);
        return MenuResponseDTO.from(savedMenu);
    }

    @Transactional
    public MenuResponseDTO update(Integer menuCode, MenuRequestDTO request) {
        Menu menu = menuRepository.findById(menuCode)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "메뉴를 찾을 수 없습니다. menuCode=" + menuCode
                ));
        Category category = findCategory(request.getCategoryCode());

        menu.change(
                request.getMenuName(),
                request.getMenuPrice(),
                category,
                request.getOrderableStatus()
        );

        return MenuResponseDTO.from(menu);
    }

    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findByOrderableStatus(String status) {
        List<Menu> menuList =
            menuRepository.findByOrderableStatusOrderByMenuPriceAscMenuCodeAsc(status);

        List<MenuResponseDTO> listMenuResponseDTO = menuList.stream()
                                    .map(menu -> MenuResponseDTO.from(menu))
                                    .toList();
        return listMenuResponseDTO;
    }

    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findByMinimumPrice(Integer price) {

        List<Menu> menuList = menuRepository.findByMenuPriceGreaterThanEqualOrderByMenuPriceAscMenuCodeAsc(price);

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }

    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findByStatusAndMaximumPrice(String status, Integer price) {

        List<Menu> menuList = menuRepository.findByOrderableStatusAndMenuPriceLessThanEqualOrderByMenuPriceAscMenuCodeAsc(
                status, price);

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }


    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findByCategoryQueryMethod(Integer categoryCode) {
        List<Menu> menuList = menuRepository.findByCategory_CategoryCodeOrderByMenuCodeAsc(categoryCode);

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }

    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findByCategoryNameQueryMethod(String categoryName) {
        List<Menu> menuList = menuRepository.findByCategory_CategoryNameOrderByMenuCodeAsc(categoryName);

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }

    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findByMenuNameQueryMethod(String menuName) {
        List<Menu> menuList = menuRepository.findByMenuNameContainingOrderByMenuCodeAsc(menuName);

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }

    // 클래스안에서만 사용하는 메소드 -> 검증 코드
    private Category findCategory(Integer categoryCode) {
        return categoryRepository.findById(categoryCode)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "카테고리를 찾을 수 없습니다. categoryCode=" + categoryCode
                ));
    }

    // Projection 인터페이스 활용했으므로 반환타입 확인
    @Transactional(readOnly = true)
    public List<CategoryMenuStatisticsDTO> findCategoryStatistics() {
        return menuRepository.findCategoryStatistics();
    }

    // Projection 인터페이스 활용했으므로 반환타입 확인
    @Transactional(readOnly = true)
    public List<CategoryMenuCountProjection> findCategoryMenuCounts() {
        return menuRepository.findCategoryMenuCounts();
    }

    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findByCategory(Integer categoryCode) {
        List<Menu> menuList = menuRepository.findByCategory(categoryCode);

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }

    @Transactional(readOnly = true)
    public List<MenuResponseDTO> searchByPriceRange(Integer minPrice, Integer maxPrice, String status) {
        // minPrice 또는 maxPrice가 null -> 가격 범위를 올바르게 입력해야합니다.
        // minPrice > 0 / maxPrice < 0 -> 가격 범위를 올바르게 입력해야합니다.
        // minPrice > maxPrice -> 가격 범위를 올바르게 입력해야합니다.
        if(minPrice == null || maxPrice == null || minPrice < 0 || maxPrice < 0 || minPrice > maxPrice) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "가격 범위를 올바르게 입력해야합니다.");
        }

        // status -> Y or N
        if (!"Y".equals(status) && !"N".equals(status)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "주문 가능 상태는 Y 또는 N 이어야 합니다.");
        }

        List<Menu> menuList = menuRepository
                .searchByPriceRange(minPrice, maxPrice, status);

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }

    @Transactional(readOnly = true)
    public List<MenuResponseDTO> searchByContainingName(String keyword) {
        List<Menu> menuList = menuRepository
                .searchByContainingName(keyword);

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }

    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findMenusAboveCategoryAverage() {
        List<Menu> menuList = menuRepository
                .findMenusAboveCategoryAverage();

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }

    @Transactional
    public PriceUpdateResponseDTO increasePriceByCategory(Integer categoryCode, Integer increaseRate) {
        Category category = findCategory(categoryCode);
        int updatedCount = menuRepository.increasePriceByCategory(category, increaseRate);

        return new PriceUpdateResponseDTO(updatedCount);
    }

    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findByCategoryNative(Integer categoryCode) {
        List<Menu> menuList = menuRepository
                .findByCategoryNative(categoryCode);

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }


    // 문제 1번 가격 범위
    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findMenusByPriceRange(Integer minPrice, Integer maxPrice) {
        List<Menu> menuList = menuRepository
                .findByMenuPriceBetweenOrderByMenuPriceDescMenuCodeAsc(minPrice, maxPrice);

        if(minPrice == null || maxPrice == null || minPrice < 0 || maxPrice < 0 || minPrice > maxPrice) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "가격 범위를 올바르게 입력해야합니다.");
        }

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }


    // 문제 2번
    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findMenusByCategoryAndStatus(Integer categoryCode, String status) {
        List<Menu> menuList = menuRepository
                .findByCategory_CategoryCodeAndOrderableStatusOrderByMenuCodeAsc(categoryCode, status);

        findCategory(categoryCode);

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }

    // 문제 3번 JPQL
    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findOrderableMenus() {
        List<Menu> menuList = menuRepository
                .findOrderableMenus();

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }

    // 문제 4번
    @Transactional(readOnly = true)
    public List<MenuResponseDTO> searchMenus(Integer categoryCode, Integer maxPrice) {
        List<Menu> menuList = menuRepository
                .searchMenus(categoryCode, maxPrice);

        findCategory(categoryCode);
        if (maxPrice == null || maxPrice < 0)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "가격 범위를 올바르게 입력해야합니다.");
        return menuList.stream().map(MenuResponseDTO::from).toList();
    }

    // 문제 5번
    /*
    *      * - 카테고리별 주문 가능 메뉴 개수를 집계한다.
     * - 카테고리 코드, 이름과 메뉴 개수를 반환한다.
     * - 인터페이스 Projection을 사용한다.
    * */
    @Transactional(readOnly = true)
    public List<CategoryMenuCountProjection> findOrderableMenuCounts() {
        return menuRepository.findOrderableMenuCounts();
    }

    // 문제 6번
    @Transactional(readOnly = true)
    public List<CategoryMenuStatisticsDTO> findCategoryPriceStatistics() {
        return menuRepository.findCategoryPriceStatistics();
    }

    // 문제 7번
    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findMenusBelowAverage() {
        return menuRepository.findMenusBelowAverage().stream()
                .map(MenuResponseDTO::from)
                .toList();
    }

    // 문제 8번
//
//         * - 요청 가격 이상인 메뉴를 네이티브 쿼리로 조회한다.
//     * - Projection 없이 Menu 엔티티로 결과를 받는다.
//            * - 가격이 높은 메뉴부터 반환한다.
    @Transactional(readOnly = true)
    public List<MenuResponseDTO> findExpensiveMenusNative(Integer price) {
        List<Menu> menuList = menuRepository
                .findExpensiveMenusNative(price);

        return menuList.stream().map(MenuResponseDTO::from).toList();
    }
}
