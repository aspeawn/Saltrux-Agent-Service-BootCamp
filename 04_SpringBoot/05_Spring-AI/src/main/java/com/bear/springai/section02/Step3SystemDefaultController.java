package com.bear.springai.section02;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.SimpleLoggerAdvisor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "02-01.Prompt")
@RestController
public class Step3SystemDefaultController {

    public Step3SystemDefaultController(ChatClient.Builder builder) {
        this.chatClient = builder
                .defaultSystem("너는 스터디 게시판의 도우미이다. 한국어로 2문장 이내로 답변해.")
                .defaultAdvisors(new SimpleLoggerAdvisor())
                .build();

//        this.chatClient = builder
//                .defaultSystem("너는 개발자의 학습을 원활하게 해줄 수 있느 도우미야. 이해하기 쉽게 답변 부탁해")
//                .defaultAdvisors(new SimpleLoggerAdvisor())
//                .build();
    }

    private final ChatClient chatClient;

    // system을 지정안했을 때 defaultSYstem의 내용이 System 메시지로 전달됨
    @GetMapping("/section02/chap03")
    public String chap03(@RequestParam String question) {
        return chatClient
                .prompt()
                .user(question)
                .call()
                .content();
    }

    // defaultSystem 무시하고 System메시지 변경됨
    @GetMapping("/section02/chap03/override")
    public String chap03_1(@RequestParam String question) {
        return chatClient
                .prompt()
                .system("Answer in English, in one short sentences")
                .user(question)
                .call()
                .content();
    }

}
