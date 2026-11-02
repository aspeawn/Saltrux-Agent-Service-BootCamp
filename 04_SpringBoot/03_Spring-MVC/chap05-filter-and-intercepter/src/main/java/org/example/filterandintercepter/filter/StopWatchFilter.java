package org.example.filterandintercepter.filter;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;


public class StopWatchFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        /*chain.doFilter()를 호출하기 전은 Filter 전처리 영역*/
        /*
         * ServletRequest와 ServletResponse : HTTP 전용 타입이 아님
         * -> URI, HEADER, 상태코드 (HTP)를 사용하기 위해 변환
         * */
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        System.out.println("httpRequest.getRequestURI() " + httpRequest);
        if (httpRequest.getRequestURI().equals("/filter/block")
                && httpRequest.getHeader("X-Test") == null) {
            System.out.println("[Filter] X-Test 헤더가 없어 요청 차단");
            httpResponse.sendError(HttpServletResponse.SC_FORBIDDEN, "X-Test 헤더가 필요합니다.");
            return; // chain.doFliter() 호출하지 않으므로 이후 과정인 DispatcherServlet Controller 동작 x
        }

        System.out.println("[2. Filter] 전처리 시간 측정 시작");
        long startTime = System.currentTimeMillis();    // 호출 시작 시간 기록

        chain.doFilter(request, response);      // Filter 다음 동작 실행됨 -> 다음 필터 or Servlet 실행

        System.out.println("[7. Filter] 후처리");
        long endTime = System.currentTimeMillis();

        System.out.println("[7. Filter] 전체 체인 수행시간 : " + (endTime - startTime) + "ms");
    }

    // Filter 객체가 생성되고 Servlet Container에 등록될 때 호출됨
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("[1. Filter] Init 메소드 동작");
    }

    @Override
    public void destroy() {
        System.out.println("[5. Filter] destory - 어플리케이션 종료 시 한 번 호출");
    }
}
