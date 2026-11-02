package org.example.exceptionhandler.exception;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;

/*
* @ControllerAdvice
* - 모든 컨트롤러에 적용되는 공통 코드를 모아놓는 공간
* - 여러 컨트롤러에서 발생한 예외를 공통 처리할 수 있는 클래스
* */
@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(NullPointerException.class)
    public String nullPointerException(NullPointerException exception){
        System.out.println("Global Exception 처리");
        return "error/nullPointer";
    }

    /* 전역 사용자 예외처리도 진행 */
    @ExceptionHandler(MemberRegistException.class)
    public String MemberRegistException(MemberRegistException exception, Model model) {
        System.out.println("Global Member Exception 처리");
        model.addAttribute("exception", exception);
        return "error/memberRegist";
    }

    /* Exception은 대부분의 일반 예외가 상속하는 타입
    * - 구체적인 처리 메소드가 없을 경우에는 마지막 안전망으로 사용
    * - Spring에서는 발생한 예외와 가장 구체적을 일치하는 처리 메서드를 우선 사용
    * */
    @ExceptionHandler(Exception.class)
    public String exception(Exception exception) {
        return "error/default";
    }
}
