package org.example.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/// / 1. Swagger 설정 어노테이션 방식
//@OpenAPIDefinition(
//        info = @Info(title = "REST API 사용설명서",
//        description = "REST API 수업 자료 입니다.",
//        version = "v1",
//        contact = @Contact(
//                name = "bear",
//                email = "bear.ohgiraffers@gmail.com"
//        ))
//)
//@Configuration
//public class SwaggerConfig {
//
//
//}

// Swagger 설정방식 두번째
// 자바 코드로 OPENAPI 설정
@Configuration
public class SwaggerConfig {

        @Bean
        public OpenAPI openAPI() {
                return new OpenAPI()
                        .components(new Components())
                        .info(apiInfo());
        }

        private Info apiInfo() {
                return new Info()
                        .title("Rest API 설명서")
                        .description("REST API 수업 API 명세서")
                        .version("1.0.0");
        }
}