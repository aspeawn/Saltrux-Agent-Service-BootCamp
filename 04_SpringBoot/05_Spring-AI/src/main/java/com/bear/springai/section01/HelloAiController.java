package com.bear.springai.section01;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "01. Spring AI 시작하기")
@RestController
@RequiredArgsConstructor
public class HelloAiController {

    private final ChatClient chatClient;

    @GetMapping("/section01/hello")
    public String hello() {

        /*
        * chatClient
        * - LLM 모델과 실제로 HTTP 통신을 하는 객체
        *
        * 동기호출
        * - call() LLM의 답변이 "전부" 완성될때까지 기다렸다가 한번에 돌려줌
        * */
        return chatClient
                .prompt()
                .user("안녕")
                .call()
                .content();
        // 1) 프롬포트 요청 작성
        // 2) 사용자의 질문을 프롬포트에 추가
        // 3) LLM에게 전송하고 답변을 기다림 (동기)
        // 4) 답변에서 응답 텍스트만 꺼낸다.
    }

}
