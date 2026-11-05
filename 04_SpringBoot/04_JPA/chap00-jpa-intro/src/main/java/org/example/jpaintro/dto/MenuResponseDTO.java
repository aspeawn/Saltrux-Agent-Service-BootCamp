package org.example.jpaintro.dto;

import lombok.*;
import org.example.jpaintro.entity.Menu;

// 응답 전용 DTO
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class MenuResponseDTO {

    private Integer menuCode;
    private String menuName;
    private Integer menuPrice;
    private Integer categoryCode;
    private String orderableStatus;

    // Menu 클래스를 MenuResponseDTO로 변환시키는 팩토리 메소드
    public static MenuResponseDTO from(Menu menu){
        return new MenuResponseDTO(
                menu.getMenuCode(),
                menu.getMenuName(),
                menu.getMenuPrice(),
                menu.getCategoryCode(),
                menu.getOrderableStatus()
        );
    }

}

// Menu 객체의 menu를 받아와서 이걸 DTO에 담음