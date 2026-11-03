package org.example.fileupload.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Locale;

/*
* WebMvcConfigurer
* - Spring MVC의 기본 설정을 유지하면서 필요한 기능만 추가하는 인터페이스
* - 정적 리소스, CORS, 인터셉터 등 웹 설정을 재정의 기능
* */
@Configuration
public class Webconfig implements WebMvcConfigurer {
    @Value("${file.upload.windows.path}")
    private String windowPath;
    @Value("${file.upload.mac.path}")
    private String macPath;

    /*
    * addResourceHandler
    * - 정적파일의 접근을 관리할 수 있는 메소드
    * - 브라우저가 요청할 URL과 서버의 실제 파일 경로를 연결(매핑)
    * */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String osName = System.getProperty("os.name").toLowerCase();
        String uploadPath;

        if(osName.contains("win")) {
            uploadPath = windowPath;
        } else {
            uploadPath = macPath;
        }
        System.out.println("현재 내 OS" + osName);
        System.out.println("업로드 파일 경로 = " + uploadPath);

        // 실제 업로드된 파일에 접근할 URL 패턴과
        // 실제 파일 시스템의 경로 매핑
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:///"+uploadPath + "/");
    }
}
