package com.bear.section01.simple;

import jakarta.persistence.*;
import org.junit.jupiter.api.*;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class SimpleJPQLTests {

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
    * JPQL
    * - SELECT, UPDATE, DELETE의 사용은 SQL과 동일
    * - INSERT -> persist() 영속 메소드를 사용해야함
    * - 엔티티의 별칭을 필수로 사용
    *
    * - 쿼리객체 : 쿼리를 실행하고 결과를 전달
    * - TypedQuery  : 반환할 타입을 명확하게 지정하는 방식
    * - Query       : 반환할 타입을 지정할 수 없을 때 Object형으로 받는 방식
    *
    * - getSingleList() : 결과가 정확히 한 행일 경우 사용 (많으면 예외 발생)
    * - getResultList() : 결과가 두행이상일 때 사용 없으면 빈 컬렉션 반환
    * */
    @Test
    public void TypedQuery를_이용한_단일메뉴_조회_테스트() {

        // when     쿼리문에서는 컬럼이 필요하지만 jpql에서는 엔티티로
        String jpql = "SELECT m.menuName FROM menu_section01 as m WHERE m.menuCode = 7";
        TypedQuery<String> query = entityManager.createQuery(jpql, String.class);

        String resultMenuName = query.getSingleResult();

        assertEquals("민트미역국", resultMenuName);

    }

    @Test
    public void Query를_이용한_단일메뉴_조회_테스트() {

        // given
        String jpql = "SELECT m.menuName FROM menu_section01 as m WHERE m.menuCode = 7";

        // when
        Query query = entityManager.createQuery(jpql);
        Object resultMenuName = query.getSingleResult();

        System.out.println((String) resultMenuName);

        // then
        assertTrue(resultMenuName instanceof String);
        assertEquals("민트미역국", resultMenuName);

    }

    @Test
    public void TypedQuery를_이용한_단일행_조회_테스트() {

        // when
        String jpql = "SELECT m FROM menu_section01 as m WHERE m.menuCode = 7";
        TypedQuery<Menu> query = entityManager.createQuery(jpql, Menu.class);

        Menu foundMenu = query.getSingleResult();

        // then
        assertEquals(7, foundMenu.getMenuCode());
        System.out.println(foundMenu);

    }

    @Test
    public void TypedQuery를_이용한_다중행_조회_테스트() {

        // when
        String jpql = "SELECT m FROM menu_section01 as m";
        TypedQuery<Menu> query = entityManager.createQuery(jpql, Menu.class);    // 반환 타입을 row와 매핑할 엔티티 타입으로 설정

        List<Menu> foundMenuList = query.getResultList();

        // then
        assertNotNull(foundMenuList);
        foundMenuList.forEach(System.out::println);

    }

    @Test
    public void Query를_이용한_다중행_조회_테스트() {

        // when
        String jpql = "SELECT m FROM menu_section01 as m";
        Query query = entityManager.createQuery(jpql);

        // Object에서 Menu 타입으로 자동 형변환됨
        List<Menu> foundMenuList = query.getResultList();

        // then
        assertNotNull(foundMenuList);
        foundMenuList.forEach(System.out::println);

    }


    @Test
    public void distinct를_활용한_중복제거_여러_행_조회_테스트() {

        // when
        String jpql = "SELECT DISTINCT m.categoryCode FROM menu_section01 m";
        TypedQuery<Integer> query = entityManager.createQuery(jpql, Integer.class);
        List<Integer> categoryCodeList = query.getResultList();

        // then
        assertNotNull(categoryCodeList);
        categoryCodeList.forEach(System.out::println);

    }

    @Test
    public void in_연산자를_활용한_조회_테스트() {

        // when
        String jpql = "SELECT m FROM menu_section01 m WHERE m.categoryCode IN (6, 10)";
        List<Menu> menuList = entityManager.createQuery(jpql, Menu.class).getResultList();

        // then
        assertNotNull(menuList);
        menuList.forEach(System.out::println);
    }

    @Test
    public void like_연산자를_활용한_조회_테스트() {

        // when
        String jpql = "SELECT m FROM menu_section01 m WHERE m.menuName LIKE '%마늘%'";        // SQL
        List<Menu> menuList = entityManager.createQuery(jpql, Menu.class).getResultList();

        // then
        assertNotNull(menuList);
        menuList.forEach(System.out::println);
    }

}
