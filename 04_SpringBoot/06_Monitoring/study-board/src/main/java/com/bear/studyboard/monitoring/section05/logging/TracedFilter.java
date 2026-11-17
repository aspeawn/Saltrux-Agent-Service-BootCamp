package com.bear.studyboard.monitoring.section05.logging;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.MDC;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.UUID;

// 요청마다 요청식별자를 만들어 로그에 붙이는 필터
@Component
public class TracedFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        // 1. 요청 ID 만들기
        String traceID = UUID.randomUUID().toString().substring(0, 8);  // 8자리에서 잘라서 사용

        // 2. MDC에 담기
        MDC.put("traceId", traceID);

        // 3. 사용자에게 traceID 제공 -> 사용자가 오류를 겪었을 때 로그를 찾을 수 있는 수단이 됨.
        response.setHeader("X-Trace-Id", traceID);

        try {
            filterChain.doFilter(request, response);
        } finally {
            MDC.remove("traceId");  // 서버에서는 스레드를 재사용하므로 지우지 않으면 앞 요청의 번호가 남아있게 됨
        }
    }
}
