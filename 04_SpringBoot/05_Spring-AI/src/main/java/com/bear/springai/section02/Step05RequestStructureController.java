package com.bear.springai.section02;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@Tag(name = "02-02. Prompt Template")
@RestController
public class Step05RequestStructureController {

    private final ChatModel chatModel;

    public Step05RequestStructureController(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("/section02/step05")
    public String hello(@RequestParam String question) {

        // 1. 역할별 메시지 객체를 만든다. (.system() / . user())
        SystemMessage systemMessage = new SystemMessage("너는 신입 개발자를 가치는 강사다. 2문장 이내로 답해라.");
        UserMessage userMessage = new UserMessage(question);

        SystemMessage systemMessage1 = new SystemMessage("너는 자취생에게 메뉴를 추천해주는 요리사이다. 가성비와 맛있게 할 수있는 요리를 찾아 답해라.");
        UserMessage userMessage1 = new UserMessage(question);

        // 2. 메시지 목록을 하나의 Prompt로 묶음
        Prompt prompt = new Prompt(List.of(systemMessage, userMessage));
        Prompt prompt1 = new Prompt(List.of(systemMessage1, userMessage1));

        // 3. ChatModel이 Prompt를 HTTP 요청으로 바꿔 OpenAI에게 전송
        ChatResponse response = chatModel.call(prompt);
        ChatResponse response1 = chatModel.call(prompt1);

        System.out.println("response.getResult() = " + response.getResult());
        System.out.println("response.getResult().getOutput() = " + response.getResult().getOutput());

        // 4. ChatResponse에서 답변 텍스트를 꺼내기
        String answer = response.getResult().getOutput().getText();
        System.out.println("answer = " + answer);
        String answer2 = response1.getResult().getOutput().getText();
        /*
        * 입력토큰수
        * 출력토큰수
        * 두가지의 합계
        * */
        System.out.println("response.getMetadata().getUsage().getPromptTokens() = " + response.getMetadata().getUsage().getPromptTokens()); // 입력 토큰
        System.out.println("response.getMetadata().getUsage().getPromptTokens() = " + response.getMetadata().getUsage().getCompletionTokens()); // 출력 토큰
        System.out.println("response.getMetadata().getUsage().getPromptTokens() = " + response.getMetadata().getUsage().getTotalTokens()); // 합계
        return answer2;
    }

}
