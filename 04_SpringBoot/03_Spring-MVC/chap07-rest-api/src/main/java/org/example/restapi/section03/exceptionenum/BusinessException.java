package org.example.restapi.section03.exceptionenum;


import lombok.Getter;

@Getter
public class BusinessException extends RuntimeException{

    private final ErrorCode errorCode;

    // ErrorCode의 기본메시지를 활용하는 예외 생성자
    public BusinessException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }

    // 같은 오류코드에 다른 상세내용을 적고싶을 떄 사용하는 생성자
    public BusinessException(ErrorCode errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }
}
