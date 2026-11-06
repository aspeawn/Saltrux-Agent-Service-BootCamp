package com.bear.section01.manytoone;

import jakarta.persistence.*;
import lombok.*;


@Entity(name = "menu_and_category")
@Table(name = "tbl_menu")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MenuAndCategory {

    @Id
    @Column(name = "menu_code")
    private int menuCode;

    @Column(name = "menu_name")
    private String menuName;

    @Column(name = "menu_price")
    private int menuPrice;

    @JoinColumn(name = "category_code",
            nullable = true,    // NULL 허용여부
            unique = false,     // 외래키의 UNIQUE 제약조건
            insertable = true,  // 외래키 컬럼은 SQL INSERT에 포함할지
            updatable = true    // 외래키 컬럼은 SQL Update에 포함할지
    )
    /*
    * 매핑 어노테이션 설정
    * - fetch : 연관 엔티티의 조회 전략 지정 (Eager, Lazy)
    * - optional : 연관 엔티티가 없어도 되는지 지정 (deafult true)
    * - cascade : 현재 엔티티의 영속성 작업을 연관 엔티티에도 전파할지 설정
    *       ㄴ PERSIST : 현재 엔티티를 저장할 때 연관 엔티티도 같이 저장
    *       ㄴ MERGE : 현재 엔티티를 병합할 때 연관 엔티티도 병합
    *       ㄴ REMOVE : 현재 엔티티를 삭제할 때 연관 엔티티도 삭제
    *       ㄴ REFRESH : 현재 엔티티를 새로고침(다시조회)할 때 연관엔티티도 새로고침
    *       ㄴ ALL : 모두 적용
    * */
//    @ManyToOne    // fetch : Eager, cascade : 없음, optional : True
    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    private Category category;

    @Column(name = "orderable_status")
    private String orderableStatus;

}
