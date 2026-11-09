package org.example.jpaintro.repository;

import org.example.jpaintro.dto.CategoryMenuCountProjection;
import org.example.jpaintro.dto.CategoryMenuStatisticsDTO;
import org.example.jpaintro.entity.Category;
import org.example.jpaintro.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MenuRepository extends JpaRepository<Menu, Integer> {

    @Query("select menu from Menu menu join fetch menu.category")
    List<Menu> findAllWithCategory();

    /*
    * Spring Data JPA의 쿼리메소드
    * - 정해진 규칙에 따라 메소드 이름을 작성하면 Spring Data JPA가 JPQL을 자동 생성
    *
    * - findBy + 조건 필드 + 비교 키워드 + OrderBy + 정렬필드 + Asc/Desc
    * 키워드
    * - And / Or : 조건 연결
    * - Containing : 문자열 포함검색
    * - GreaterThanEqual / LessThanEqual : 이상/이하
    * - Between : 범위 검색
    * */
    List<Menu> findByOrderableStatusOrderByMenuPriceAscMenuCodeAsc(String orderableStatus);

    List<Menu> findByMenuPriceGreaterThanEqualOrderByMenuPriceAscMenuCodeAsc(Integer price);

    List<Menu> findByOrderableStatusAndMenuPriceLessThanEqualOrderByMenuPriceAscMenuCodeAsc(String orderableStatus, Integer menuPrice);

    /*
    * _ : 연관관계의 경계를 명확히 표현하기 위해 쓰는 암묵적인 의미
    * */
    List<Menu> findByCategory_CategoryCodeOrderByMenuCodeAsc(Integer categoryCode);

    List<Menu> findByCategory_CategoryNameOrderByMenuCodeAsc(String categoryName);

    List<Menu> findByMenuNameContainingOrderByMenuCodeAsc(String menuName);

    /*
    * DTO Projection
    * - JPQL에서 new 키워드와 DTO의 전체 패키지 이름을 사용
    *
    * 주의점
    * - JPQL에 DTO의 전체 패키지 이름을 작성
    * - Select 항목의 순서와 DTO 생성자 매개변수 순서가 같아야함
    * - count 결과는 Long, AVG 결과는 Double
    * - 생성자 필요 !
    * */
    @Query("""
                select new org.example.jpaintro.dto.CategoryMenuStatisticsDTO(
                                category.categoryCode,
                                category.categoryName,
                                COUNT(menu),
                                AVG(menu.menuPrice)
                                )
                                from Menu menu
                                                join menu.category category
                    group by category.categoryCode, category.categoryName
                                    order by category.categoryCode asc
                """)
    List<CategoryMenuStatisticsDTO> findCategoryStatistics();

    @Query("""
                select          
                                category.categoryCode as categoryCode,
                                category.categoryName as categoryName,
                                COUNT(menu) as menuCount
                                from Menu menu
                                                join menu.category category
                    group by category.categoryCode, category.categoryName
                                    order by category.categoryCode asc


                """)
    List<CategoryMenuCountProjection> findCategoryMenuCounts();

    @Query("""
                select menu
                from Menu menu
                join menu.category
                where menu.category.categoryCode = :categoryCode
                order by menu.menuCode asc
            """)
    List<Menu> findByCategory(Integer categoryCode);

//    List<Menu> findByCategory_CategoryNameOrderByMenuCodeAsc(String categoryName);
//    @Param : JPQL 파라미터와 Java 매개변수의 연결을 명확하게 하기 위해 사용 (생략 가능)
//    -> 즉 Param에서 a, b, c로 바꾸면 @Query 부분에서 :파라미터 자리표시자에 minPrice, maxPrice, status 부분을 a b c로 바꿔야함
    @Query("""
                select menu
                from Menu menu
                join fetch menu.category
                where menu.menuPrice between :minPrice and :maxPrice
                    and menu.orderableStatus = :status
                order by menu.menuPrice asc, menu.menuCode asc
""")
    List<Menu> searchByPriceRange(
            @Param("minPrice") Integer minPrice,
            @Param("maxPrice") Integer maxPrice,
            @Param("status") String status);



//    List<Menu> findByMenuNameContainingOrderByMenuCodeAsc(String menuName);
    @Query("""
            select menu
            from Menu menu
            join fetch menu.category
            where menu.menuName like %:keyword%
            order by menu.category.categoryCode asc
""")
    List<Menu> searchByContainingName(String keyword);

    // 각 메뉴를 자신이 속한 카테고리의 평균 가격과 비교
    // 해당 평균보다 비싼 메뉴만 카테고리와 함께 조회
    @Query("""
            select menu
            from Menu menu
            join fetch menu.category
            where menu.menuPrice > (
                select avg(subMenu.menuPrice)
                from Menu subMenu
                where subMenu.category = menu.category
            )
            order by menu.category.categoryCode asc
""")
    List<Menu> findMenusAboveCategoryAverage();

    /*
    * @Modifying
    * - @Query : 기본적으로 조회용 Select 쿼리로 처리됨
    * - @Query에 작성된 쿼리가 조회가 아니라 데이터를 변경하는 Update, Insert, Delete 성격의 쿼리라는 사실을 JPA에게 알려줌
    * */

    /*
    * flushAutomatically - 벌크 쿼리를 실행하기 전에 영속성 컨텍스트의 변경 내용을 DB에 Flush
    * clearAutomatically - 벌크 쿼리를 실행한 후에, 영속성 컨텍스트를 자동으로 초기화
    * */
    @Modifying(flushAutomatically = true, clearAutomatically = true)
    @Query("""
        update Menu menu
        set menu.menuPrice = menu.menuPrice + (menu.menuPrice * :increaseRate / 100)
        where menu.category = :category
""")
    int increasePriceByCategory(@Param("category")Category category, @Param("increaseRate")Integer increaseRate);

    /*
    * 네이티브 쿼리보다 JPQL이 권장되는 이유
    * 1. DB 종류에 덜 의존함
    * 2. JPA 기능과 자연스럽게 연결됨 -> 엔티티 기준으로 사용 가능
    * 3. 네이티브쿼리 -> 데이터베이스 테이블명, 컬럼명에 의존하지만, JPQL 엔티티 구조로 관리가능
    * */
    // nativeQuery = true : 일반 DB 쿼리를 쓸 수 있게 해줌
    @Query(value = """
        select menu.*
        from tbl_menu menu
        where menu.category_code = :categoryCode
        order by menu.menu_code asc
        """, nativeQuery = true)
    List<Menu> findByCategoryNative(Integer categoryCode);


    // 문제 1번
//    - 요청 가격 범위에 포함되는 메뉴를 쿼리 메서드로 조회한다.
//    - 가격 내림차순으로 반환하고, 같은 가격은 메뉴 코드순으로 정렬한다.
//    * - findBy + 조건 필드 + 비교 키워드 + OrderBy + 정렬필드 + Asc/Desc
//    * 키워드
//    * - And / Or : 조건 연결
//    * - Containing : 문자열 포함검색
//    * - GreaterThanEqual / LessThanEqual : 이상/이하
//    * - Between : 범위 검색
//    List<Menu> findByOrderableStatusOrderByMenuPriceAscMenuCodeAsc(String orderableStatus);
    List<Menu> findByMenuPriceBetweenOrderByMenuPriceDescMenuCodeAsc(Integer minPrice, Integer maxPrice);


    // 문제 2번
    /*
     * - 카테고리와 주문 가능 상태를 모두 만족하는 메뉴를 쿼리 메서드로 조회한다.
     * - 연관된 Category의 필드를 조건으로 사용한다.
     * - 카테고리가 없으면 404 NOT_FOUND를 반환한다.
    * */

    List<Menu> findByCategory_CategoryCodeAndOrderableStatusOrderByMenuCodeAsc(Integer categoryCode, String status);

    // 문제 3번
    /*
     * - 주문 가능한 메뉴를 JPQL로 조회한다.
     * - 가격이 낮은 메뉴부터 반환한다.
     * - 응답에 카테고리 코드와 이름을 포함한다.
    * */
    @Query("""                
        select menu, 
        category.categoryCode as categoryCode, 
        category.categoryName as categoryName
        
        from Menu menu
        join fetch menu.category category
        where menu.orderableStatus = 'Y'
        order by menu.menuPrice asc
""")
    List<Menu> findOrderableMenus();

    // 문제 4번
//     * 요구사항
//     * - 지정한 카테고리에서 최대 가격 이하인 메뉴를 JPQL로 조회한다.
//            * - 카테고리가 없으면 404, 잘못된 가격은 400을 반환한다.
//            * - 요청값은 파라미터 바인딩으로 전달한다.
    @Query("""
        select menu
        from Menu menu
        join fetch menu.category category
        where category.categoryCode = :categoryCode and menu.menuPrice <= :maxPrice
        order by menu.menuPrice desc
""")
    List<Menu> searchMenus(Integer categoryCode, Integer maxPrice);


    /* 문제 5번
     *      * - 카테고리별 주문 가능 메뉴 개수를 집계한다.
     * - 카테고리 코드, 이름과 메뉴 개수를 반환한다.
     * - 인터페이스 Projection을 사용한다.
     * */
    @Query("""
        select
        category.categoryCode as categoryCode,
        category.categoryName as categoryName,
        COUNT(menu) as menuCount
        from Menu menu
        join menu.category category
        where menu.orderableStatus = 'Y'
        group by category.categoryCode, category.categoryName
""")
    List<CategoryMenuCountProjection> findOrderableMenuCounts();

    // 문제 6번
    /*
     * - 카테고리별 최저 가격과 최고 가격을 조회한다.
     * - 카테고리 정보와 계산 결과를 DTO로 반환한다.
     * - JPQL DTO Projection을 사용한다.
     *     @Query("""
                select new org.example.jpaintro.dto.CategoryMenuStatisticsDTO(
                                category.categoryCode,
                                category.categoryName,
                                COUNT(menu),
                                AVG(menu.menuPrice)
                                )
                                from Menu menu
                                                join menu.category category
                    group by category.categoryCode, category.categoryName
                                    order by category.categoryCode asc
                """)
    * */
    @Query("""
        select new org.example.jpaintro.dto.CategoryMenuStatisticsDTO(
            category.categoryCode,
            category.categoryName,
            min(menu.menuPrice) as minPrice,
            max(menu.menuPrice) as maxPrice
        )
        from Menu menu
        join menu.category category
        group by category.categoryCode, category.categoryName
        order by category.categoryCode asc
""")
    List<CategoryMenuStatisticsDTO> findCategoryPriceStatistics();

    // 문제 7번
    /*
    *      * - 전체 메뉴 평균 가격보다 저렴한 메뉴를 JPQL로 조회한다.
     * - 평균 계산은 쿼리 안에서 처리한다.
     * - 응답에 카테고리 정보를 포함한다.
    * */
    @Query("""
        select menu
        from Menu menu
        join fetch menu.category
        where menu.menuPrice < (
            select avg(allMenu.menuPrice)
            from Menu allMenu
        )
        order by menu.menuPrice asc, menu.menuCode asc
""")
    List<Menu> findMenusBelowAverage();


    // 문제 8번
//
//         * - 요청 가격 이상인 메뉴를 네이티브 쿼리로 조회한다.
//     * - Projection 없이 Menu 엔티티로 결과를 받는다.
//            * - 가격이 높은 메뉴부터 반환한다.
    @Query(value = """
        select *
        from tbl_menu
        where menu_price >= :price
        order by menu_price desc, menu_code asc
        """, nativeQuery = true)
    List<Menu> findExpensiveMenusNative(@Param("price") Integer price);
}
