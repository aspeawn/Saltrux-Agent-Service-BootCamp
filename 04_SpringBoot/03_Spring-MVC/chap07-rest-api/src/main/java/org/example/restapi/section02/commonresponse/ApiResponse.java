package org.example.restapi.section02.commonresponse;

import lombok.*;

/*
*  모든 API에서 공통으로 사용할 응답 형식
*
* @param <T> 응답 본문에 담을 데이터 타입
* */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ApiResponse<T> {

    private int status;
    private String message;
    private T data;

    /*
    * 정적 팩토리 메소드
    * - 의미 부여
    * - 객체 생성과정을 캡슐화해 객체 생성,반환하는 메소드
    * - 생성 목적을 이름으로 명확하게 표현할 수 있는 장점이 있음
    *
    * ApiResponse.success(...) 호출
    * */

    public static <T> ApiResponse<T> success(int status, String message, T data) {
        return new ApiResponse<>(status, message, data);
    }

    public static <T> ApiResponse<T> failure(int status, String message, T data) {
        return new ApiResponse<>(status, message, null);
    }
}
