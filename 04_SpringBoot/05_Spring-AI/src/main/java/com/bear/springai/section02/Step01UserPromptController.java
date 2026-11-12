package com.bear.springai.section02;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "02. Prompt")
@RestController
@RequiredArgsConstructor
public class Step01UserPromptController {

    private final ChatClient chatClient;

    @GetMapping("/section02/step01")
    public String hello(@RequestParam String question) {

        return chatClient
                .prompt()
                .user(question)
                .call()
                .content();
    }

    @GetMapping("/section02/step02")
    public String step02(@RequestParam String question) {

        return chatClient
                .prompt()
                .system("너는 초등학생을 가르치는 선생님이야. 쉬운 단어만 사용해서 3문장 이내로 답해")
                .user(question)
                .call()
                .content();
    }

    /*
    * SystemPrompt
    * - 개발자가 LLM에게 주는 지침 (클라이언트에게 보이지 않음)
    * - LLM은 System메세지 우선하는 지침으로 취급
    * */
    @GetMapping("/section02/step02/expert")
    public String step02_expert(@RequestParam String question) {

        return chatClient
                .prompt()
                .system("너는 10년차 백엔드 개발자야. 전문용어를 사용해서 핵심만 3문장 이내로 답해")
                .user(question)
                .call()
                .content();
    }

    @GetMapping("/section02/practice/translate")
    public String translate(@RequestParam String text) {
        return chatClient
                .prompt()
                .system("Translate the user's text into English. summarize the key points")
                .user(text)
                .call()
                .content();
    }

}
