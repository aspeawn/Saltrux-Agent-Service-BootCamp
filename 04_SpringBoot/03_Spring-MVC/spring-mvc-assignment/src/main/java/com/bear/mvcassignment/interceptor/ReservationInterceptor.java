package com.bear.mvcassignment.interceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class ReservationInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        System.out.println("[Interceptor preHandle] 예약 요청 전: "
                + request.getMethod() + " " + request.getRequestURI());
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response,
                           Object handler, ModelAndView modelAndView) {
        System.out.println("[Interceptor postHandle] 예약 컨트롤러 처리 후: "
                + request.getRequestURI());
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response,
                                Object handler, Exception exception) {
        System.out.println("[Interceptor afterCompletion] 요청 완료, status="
                + response.getStatus());

        if (exception != null) {
            System.out.println("[Interceptor afterCompletion] 예외 발생: "
                    + exception.getClass().getSimpleName());
        }
    }

}
