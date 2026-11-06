package com.bear.section05.join;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import org.junit.jupiter.api.*;

import java.util.List;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class JoinTests {

    private static EntityManagerFactory entityManagerFactory;
    private EntityManager entityManager;

    @BeforeAll
    public static void initFactory() {
        entityManagerFactory = Persistence.createEntityManagerFactory("jpatest");
    }

    @BeforeEach
    public void initManager() {
        entityManager = entityManagerFactory.createEntityManager();
    }

    @AfterAll
    public static void closeFactory() {
        entityManagerFactory.close();
    }

    @AfterEach
    public void closeManager() {
        entityManager.close();
    }
    
    /*
    * 1. 일반조인 : 일반적인 SQL 조인을 의미 (내부 조인, 외부 조인, 컬렉션 조인, 세타 조인)
    * 2. 패치조인 : JPQL에서 성능 최적화를 위해 제공하는 기능 (연관된 엔티티나 컬렉션을 한번에 조회) -> 즉시 로딩을 실행해야함
    * */
    @Test
    public void 내부조인을_이용한_조회_테스트() {

        /*
        * 처음 SQL실행 후 로딩할 때의 조인 결과를 다 조회한 뒤에 사용
        * */

        // when
        String jpql = "SELECT m FROM menu_section05 m JOIN m.category c";

        // JOIN을 적었지만 Select 대상은 menu -> 조인을 해도 Category를 함께 가져오지는 않음
        /*
        * 2. Menu -> ManyToOne -> 즉시 로딩(Eager)
        * 메뉴 목록 조회 1번 + 카테고리 조회 N번 => N+1번의 문제 (쿼리가 N+1번 발생한다) -> 비즈니스 상황별로 해결 방법이 다름 (그 중 하나인 Fetch 조인)
        * */

        List<Menu> menuList = entityManager.createQuery(jpql, Menu.class).getResultList();

        // then
        assertNotNull(menuList);
        menuList.forEach(System.out::println);
    }

    @Test
    public void 페치조인을_이용한_조회_테스트() {

        //when
        String jpql = "SELECT m FROM menu_section05 m JOIN FETCH m.category c";
        List<Menu> menuList = entityManager.createQuery(jpql, Menu.class).getResultList();

        //then
        assertNotNull(menuList);
        menuList.forEach(System.out::println);

    }

    @Test
    public void 외부조인을_이용한_조회_테스트() {

        // when
        String jpql = "SELECT m.menuName, c.categoryName " +
                      "FROM menu_section05 m RIGHT JOIN m.category c " +
                      "ORDER BY m.category.categoryCode";

        /*
        * FETCH를 붙이면 조인한 Category까지 Select에 포함 한번의 쿼리로 함께 영속화가 됨
        * */
        List<Object[]> menuList = entityManager.createQuery(jpql, Object[].class).getResultList();

        // then
        assertNotNull(menuList);

        menuList.forEach(row -> {
            Stream.of(row).forEach(col -> System.out.print(col + " "));
            System.out.println();
        });
    }

    @Test
    public void 컬렉션_조인을_이용한_조회_테스트() {

        // when
        String jpql = "SELECT c.categoryName, m.menuName FROM category_section05 c LEFT JOIN c.menuList m";
        List<Object[]> categoryList = entityManager.createQuery(jpql, Object[].class).getResultList();

        // then
        assertNotNull(categoryList);

        categoryList.forEach(row -> {
            Stream.of(row).forEach(col -> System.out.print(col + " "));
            System.out.println();
        });
    }

    @Test
    public void 세타조인을_이용한_조회_테스트() {

        // 크로스조인과 동일 -> 조인되는 모든 경우의 수를 반환
        // when
        String jpql = "SELECT c.categoryName, m.menuName FROM category_section05 c, menu_section05 m";
        List<Object[]> categoryList = entityManager.createQuery(jpql, Object[].class).getResultList();

        // then
        assertNotNull(categoryList);

        categoryList.forEach(row -> {
            Stream.of(row).forEach(col -> System.out.print(col + " "));
            System.out.println();
        });

    }
}
