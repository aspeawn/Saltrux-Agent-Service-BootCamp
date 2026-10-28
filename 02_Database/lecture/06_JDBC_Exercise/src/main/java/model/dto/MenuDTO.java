package model.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MenuDTO {
    private int code;
    private String name;
    private int price;
    private int categorycode;
    private String orderableStatus;
}
