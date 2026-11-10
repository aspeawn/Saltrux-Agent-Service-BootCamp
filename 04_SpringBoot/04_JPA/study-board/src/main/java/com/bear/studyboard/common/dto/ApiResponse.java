package com.bear.studyboard.common.dto;


import lombok.*;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ApiResponse<T> {

    private int status;
    private String message;
    private T data;

    /*
    * JAVA의 정적 팩토리 메소드(관례)
    * from -> 매개변수 하나를 받아 객체를 생성할 떄
    * of -> 여러값을 조합해서 객체를 생성할 떄
    * */
    public static <T> ApiResponse<T> of(HttpStatus status, String message, T data) {
        return new ApiResponse<>(status.value(), message, data);
    }
 }
