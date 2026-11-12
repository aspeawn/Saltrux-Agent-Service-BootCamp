package com.bear.springai.section01;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "01. Spring AI 시작하기")
@RestController
@RequiredArgsConstructor
public class DemoController {

    private final ChatClient chatClient;

    @GetMapping("/section00/hello")
    public String hello() {
        return chatClient
                .prompt()
                .user("안녕")
                .call()
                .content();

    }
}
