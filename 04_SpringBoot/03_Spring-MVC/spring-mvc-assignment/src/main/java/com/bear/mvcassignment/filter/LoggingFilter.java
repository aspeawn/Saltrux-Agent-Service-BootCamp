package com.bear.mvcassignment.filter;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public class LoggingFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("[Dto Filter] Init 메소드 동작");
    }

    // 요청 로깅 Filter : URI, HTTP 메소드, 요청 ID 기록 + 응답에 요청 ID
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        String uri = httpRequest.getRequestURI();
        String httpMethod = httpRequest.getMethod();
        String requestId = httpRequest.getProtocolRequestId();
        System.out.println("[요청 시작] Id = " + requestId
        + ", method = " + httpMethod
        + ", uri = " + uri);

        chain.doFilter(request,response);

        System.out.println("[요청 종료] Id = " + requestId
        + ", status = " + httpResponse.getStatus());
    }

    @Override
    public void destroy() {
        System.out.println("[Dto Filter] destory - 어플리케이션 종료 시 한 번 호출");
    }
}
