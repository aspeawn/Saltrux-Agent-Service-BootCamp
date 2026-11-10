package com.bear.studyboard.common.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

/*
* 예외가 발생했을 때 클라이언트에 전달할 응답 DTO
* */
@AllArgsConstructor
@Getter
@ToString
public class ErrorResponseDTO {
    private String code;
    private String detail;

    // BusinessException 가진 Error코드와 상세메시지로 응답 객체 생성하는 팩토리 메소드
    static ErrorResponseDTO of(ErrorCode errorCode, String detail) {

        return new ErrorResponseDTO(
            errorCode.name(), detail
        );
    }

}
