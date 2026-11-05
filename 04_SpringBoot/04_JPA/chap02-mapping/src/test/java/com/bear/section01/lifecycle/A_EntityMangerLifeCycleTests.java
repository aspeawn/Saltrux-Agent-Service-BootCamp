package com.bear.section01.lifecycle;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import org.junit.jupiter.api.*;

public class A_EntityMangerLifeCycleTests {

    private static EntityManagerFactory entityMangerFactory;
    private EntityManager entityManager;

    @BeforeAll
    public static void initFactory() {
        entityMangerFactory = Persistence.createEntityManagerFactory("jpatest");
    }

    // 테스트 메소드 각각이 호출되기 이전에 동작
    @BeforeEach
    public void initManager() {
        entityManager = entityMangerFactory.createEntityManager();
    }

    @AfterAll
    public static void closeFactory() {
        entityMangerFactory.close();
    }

    @AfterEach
    public void closeManager() {
        entityManager.close();
    }

}
