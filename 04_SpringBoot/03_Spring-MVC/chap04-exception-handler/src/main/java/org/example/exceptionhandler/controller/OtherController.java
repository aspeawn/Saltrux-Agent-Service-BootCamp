package org.example.exceptionhandler.controller;

import org.example.exceptionhandler.exception.MemberRegistException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OtherController {

    @GetMapping("/other-controller-null")
    public String otherControllerException() {
        String str = null;
        System.out.println(str.charAt(0));      // Null Pointer Exception
        return "/";
    }

    @GetMapping("/other-controller-user")
    public String userExcepttion() throws MemberRegistException {
        boolean check= true;
        if(check) {
            throw new MemberRegistException("[OtherController] 당신은 우리 서비스의 회원이 될 수 없습니다.");
        }
        return "/";
    }
}

