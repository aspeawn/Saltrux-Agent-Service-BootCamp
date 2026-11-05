package com.bear.section03.persistance;

import com.bear.section03.persistance.Menu;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;
import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class A_EntityLifeCycleTest {

    private static EntityManagerFactory entityMangerFactory;
    private EntityManager entityManager;

    @BeforeAll
    public static void initFactory() { entityMangerFactory = Persistence.createEntityManagerFactory("jpatest"); }

    @BeforeEach
    public void initManager() { entityManager = entityMangerFactory.createEntityManager(); }

    @AfterAll
    public static void closeFactory() { entityMangerFactory.close(); }

    @AfterEach
    public void closeManager() { entityManager.close(); }

    /*
    * merge() :
    * 준영속 엔티티 객체의 식별자 값으로 1차 엔티티 객체를 조회,
    * 조회한 엔티티 객체에 준영속 상태의 엔티티 객체의 값을 병합해서 엔티티 객체를 반환
    * -> 영속성 컨텍스트에 관리를 받지 않는 엔티티를 값을 영속성 컨텍스트에 관리되는 엔티티에 복사하는 기능
    * */
    @Test
    public void 병합_merge_수정_테스트() {

        Menu menuToDetach = entityManager.find(Menu.class, 2);  // 영속상태
        entityManager.detach(menuToDetach);     // 준영속 (영속 x)

        menuToDetach.setMenuName("수박죽");    // 바꿔줬을 때 -> 반영 안됨!

        Menu refoundMenu = entityManager.find(Menu.class, 2);   // 영속 상태

        System.out.println(menuToDetach.hashCode());
        System.out.println(refoundMenu.hashCode());

        entityManager.merge(menuToDetach);  // 준영속 객체의 값을 영속객체 옮기는 행위

        // 캐싱된 영속 객체가 반환됨
        Menu mergedMenu = entityManager.find(Menu.class, 2);
        assertEquals("수박죽", mergedMenu.getMenuName());

        // 실제 DB에는 반영이 안됨 -> Transaction으로 안해서 영속 컨텍스트에서만 동작이 이루어짐
    }

    @Test
    public void 병합_merge_삽입_테스트() {

        Menu menuToDetach = entityManager.find(Menu.class, 2);  // 영속상태
        entityManager.detach(menuToDetach);     // 준영속 상태

        menuToDetach.setMenuCode(999);          // 데이터 변경 (ID)
        menuToDetach.setMenuName("수박죽");       // 데이터 변경

        Menu refoundMenu = entityManager.find(Menu.class, 2);   // 영속상태

        // 있으면 병합, 아니면 새로 만듦
        entityManager.merge(menuToDetach);

        // 새로운 데이터 조회
        Menu mergedMenu = entityManager.find(Menu.class, 999);
        assertEquals("수박죽", mergedMenu.getMenuName());

    }
}
