package com.bear.section04.groupfunction;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import org.junit.jupiter.api.*;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class GroupFunctionTests {
	
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
	* JPQL의 그룹함수 COUNT, MAX, MIN, SUM, AVG .. 같은 그룹함수도 사용할 수 있다.
	* 주의할 점
	* 1. 그룹함수의 반환 타입은 결과값이 정수면 Long, 실수면 Double
	* 2. 값이 없는 상태에서 그룹함수는 NULL 응답 ( COUNT만 0을 응답 )
	* 		-> 기본자료형을 사용하면 NullPointException 발생 (래핑클래스로 사용하는 게 좋다.)
	*
	* */

	@Test
	public void 특정_카테고리의_등록된_메뉴_수_조회() {
		
		// given
		int categoryCodeParameter = 3;
		
		// when
		String jpql = "SELECT COUNT(m.menuPrice) FROM menu_section04 m WHERE m.categoryCode = :categoryCode";
		long countOfMenu = entityManager.createQuery(jpql, Long.class)
				.setParameter("categoryCode", categoryCodeParameter)
				.getSingleResult();
		
		// then
		/*
		* assertThrows : 원하는 예외를 발생시키는 지 확인하는 테스트를 할 때 사용하는 검증
		* assertThorws(원하는 예외 클래스, () -> {예외 발생 코드})
		* */
		assertTrue(countOfMenu >= 0);
		System.out.println("countOfMenu = " + countOfMenu);
		
	}
	
	@Test
	public void count를_제외한_다른_그룹함수의_조회결과가_없는_경우_테스트() {
		
		// given
		int categoryCodeParameter = 3;

		// when
		String jpql = "SELECT SUM(m.menuPrice) FROM menu_section04 m WHERE m.categoryCode = :categoryCode";


		// then
		assertThrows(NullPointerException.class, () -> {
			long sumOfPrice = entityManager.createQuery(jpql, Long.class)
					.setParameter("categoryCode", categoryCodeParameter)
					.getSingleResult();

		});

		/*
		* 반환값을 담는 변수를 Wrapping 클래스로 선언해 null 값이 반환되어도 NPE가 발생하지 않음
		* - Wrapping은 null 값 저장이 가능하기 때문에
		* */
		// 래핑클래스는 NULL을 해결할 수 있음 (기본 자료형은 null을 못담음)
		// 안에 있는 명령문이 예외를 발생시키지 않으면 빌드 성공
		assertDoesNotThrow(() -> {
			Long sumOfPrice = entityManager.createQuery(jpql, Long.class)
					.setParameter("categoryCode", categoryCodeParameter)
					.getSingleResult();

		});
	}
	
	@Test
	public void group_by절과_having절을_사용한_조회_테스트() {
		
		//given
		long minPrice = 50000L;		// long 타입 사용 -> 기본자료형
		
		//when
		String jpql = "SELECT m.categoryCode, SUM(m.menuPrice) " +
						"FROM menu_section04 m " +
						"GROUP BY m.categoryCode " +
						"HAVING SUM(m.menuPrice) >= :minPrice";
		
		List<Object[]> sumPriceOfCategoryList = entityManager.createQuery(jpql, Object[].class)
				.setParameter("minPrice", minPrice)
				.getResultList();
		
		//then
		assertNotNull(sumPriceOfCategoryList);
		sumPriceOfCategoryList.forEach(row -> {
			Arrays.stream(row).forEach(System.out::println);
		});
	}
}
