package org.example.restapi.section03.exceptionenum;

import lombok.AllArgsConstructor;
import lombok.Getter;

/*
* 예외가 발생했을 때 클라이언트에 전달할 응답 DTO
* */
@AllArgsConstructor
@Getter
public class ErrorResponse {
    private int status;
    private String code;
    private String message;
    private String detail;

    // BusinessException 가진 Error코드와 상세메시지로 응답 객체 생성하는 팩토리 메소드
    public static ErrorResponse from(BusinessException exception) {
        ErrorCode errorCode = exception.getErrorCode();

        return new ErrorResponse(
                errorCode.getHttpStatus().value(),
                errorCode.getCode(),
                errorCode.getMessage(),
                exception.getMessage()
        );
    }

}
