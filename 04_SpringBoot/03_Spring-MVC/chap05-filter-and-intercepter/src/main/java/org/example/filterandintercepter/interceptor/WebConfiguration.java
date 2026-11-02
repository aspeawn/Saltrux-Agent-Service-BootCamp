package org.example.filterandintercepter.interceptor;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// WebMvcConfiguerer : SpringMVC의 설정 (CORS, 인터셉터, URL 매핑 등) 개발자가 커스텀할 수 있게해주는 인터페이스
@Configuration
public class WebConfiguration implements WebMvcConfigurer {
    private final StopWatchInterceptor stopWatchInterceptor;

    // 생성자 주입
    public WebConfiguration(StopWatchInterceptor stopWatchInterceptor){
        this.stopWatchInterceptor = stopWatchInterceptor;
    }

    // 인터셉터를 추가하는 메소드
    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        // InterceptorRegistry : Spring MVC에서 관리하는 등록객체
        registry.addInterceptor(stopWatchInterceptor)
                .addPathPatterns("/stopwatch", "/interceptor/**")
                .excludePathPatterns("css/**", "images/**", "js/**", "error");
    }
}
