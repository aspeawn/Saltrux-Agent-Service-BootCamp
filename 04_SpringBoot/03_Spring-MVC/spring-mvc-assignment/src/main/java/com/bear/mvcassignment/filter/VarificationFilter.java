package com.bear.mvcassignment.filter;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public class VarificationFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("[Varification Filter] Init 메소드 동작");
    }

    // 검증 Filter : 요청에 X-Client-Id가 헤더에 있는 지 확인, 없으면 400 반환
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        if(httpRequest.getHeader("X-Client-Id") == null){
            System.out.println("[Filter] X-Client-Id의 값이 존재하지 않습니다.");
            httpResponse.sendError(HttpServletResponse.SC_BAD_REQUEST, "X-Client_Id 헤더가 필요합니다.");
            return;
        }

        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        System.out.println("[Varification Filter] destory - 어플리케이션 종료 시 한 번 호출");
    }
}
