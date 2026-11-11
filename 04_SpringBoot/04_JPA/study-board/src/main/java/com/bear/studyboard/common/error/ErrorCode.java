package com.bear.studyboard.common.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
// 어플리케이션에서 사용할 예외 정보를 관리하는 Enum
// 예외를 정의, 예외메시지를 일관성있게 전달하는 목적
public enum ErrorCode {
    USER_NOT_FOUND(HttpStatus.NOT_FOUND,"회원을 찾을 수 없습니다."),
    INVALID_USER_NUMBER(HttpStatus.BAD_REQUEST,"사용중인 회원 번호입니다."),
    DUPLICATE_USER_NAME(HttpStatus.CONFLICT,"이미 사용중인 회원 이름입니다."),
    MEMBER_EMAIL_DUPLICATE(HttpStatus.CONFLICT,"이미 사용중인 이메일입니다."),
    INTERNAL_ERROR(HttpStatus.INTERNAL_SERVER_ERROR,"서버에서 요청을 처리하지 못했습니다."),
    INVALID_INPUT(HttpStatus.BAD_REQUEST, "요청 입력을 확인해주세요."),
    LOGIN_FAILED(HttpStatus.UNAUTHORIZED, "이메일 또는 비밀번호가 올바르지 않습니다."),
    MEMBER_WITHDRAWN(HttpStatus.CONFLICT, "탈퇴한 회원입니다." ),
    CATEGORY_NOT_FOUND(HttpStatus.NOT_FOUND, "카테고리를 찾을 수 없습니다."),
    POST_NOT_FOUND(HttpStatus.NOT_FOUND, "게시글을 찾을 수 없습니다." ),
    COMMENT_NOT_FOUND(HttpStatus.NOT_FOUND,  "댓글을 찾을 수 없습니다." ),
    INVALID_USER_ID(HttpStatus.CONFLICT, "유저 ID가 일치하지 않습니다." );
    private final HttpStatus httpStatus;
    private final String message;

}
