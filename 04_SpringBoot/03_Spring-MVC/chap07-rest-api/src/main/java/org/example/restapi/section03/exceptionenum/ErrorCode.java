package org.example.restapi.section03.exceptionenum;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
// 어플리케이션에서 사용할 예외 정보를 관리하는 Enum
// 예외를 정의, 예외메시지를 일관성있게 전달하는 목적
public enum ErrorCode {
    USER_NOT_FOUND(HttpStatus.NOT_FOUND, "USER_NOT_FOUND", "회원을 찾을 수 없습니다."),
    INVALID_USER_NUMBER(HttpStatus.BAD_REQUEST, "INVALID_USER_NUMBER", "사용중인 회원 번호입니다."),
    DUPLICATE_USER_NAME(HttpStatus.CONFLICT, "DUPLICATE_USER_NAME", "이미 사용중인 회원 이름입니다.");

    private final HttpStatus httpStatus;
    private final String Code;
    private final String message;
}
