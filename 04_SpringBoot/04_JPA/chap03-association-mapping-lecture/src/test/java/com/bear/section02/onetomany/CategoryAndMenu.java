package com.bear.section02.onetomany;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "category_and_menu")
@Table(name = "tbl_category")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CategoryAndMenu {

    @Id
    @Column(name = "category_code")
    private int categoryCode;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "ref_category_code")
    private Integer refCategoryCode;

    @JoinColumn(name = "category_code")
    // 조회전략 기본 값이 LAZY (LIST형식으로 가져오기 때문에 양이 많음 -> EAGER이 아닌 LAZY로 기본값 설정됨)
    @OneToMany(cascade = CascadeType.PERSIST)
    private List<Menu> menuList;

}
