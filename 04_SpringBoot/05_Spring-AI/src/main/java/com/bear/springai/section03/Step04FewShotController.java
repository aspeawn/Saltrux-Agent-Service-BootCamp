package com.bear.springai.section03;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/*
* Zero-shot : 예시없이 지시만 주는 방식
* Few-shot : 입력과 정답의 예시를 몇개 보여준뒤 지시를 주는 방식
* */
@Tag(name = "03-04. 에시를 주기")
@RestController
@RequestMapping("/section03/step04")
@RequiredArgsConstructor
public class Step04FewShotController {

    private static final String POST = """
            스프링 스터디 3회차 후기입니다.
            트랜잭션 전파 속성을 실습했고 처음에는 어려웠지만 예제를 따라 하며 이해할 수 있었습니다.
            다음 주에는 테스트 코드를 다룰 예정입니다.
            """;

    private static final String COMMENTS = """
            민수: 다음 주 스터디는 강사 사정으로 취소되었습니다.
            지수: 트랜잭션보다 JPA 영속성 컨텍스트를 먼저 복습하면 좋겠습니다.
            """;


    private final ChatClient chatClient;

    @GetMapping("/before")
    public String before(@RequestParam String title) {
        return chatClient
                .prompt()
                .user(u->u.text("""
                        다음 내용 중 게시글 제목의 카테고리를 분류해줘. {title}
                        """)
                        .param("title",title))
                .call()
                .content();
    }

    @GetMapping("/after")
    public String after(@RequestParam String title) {
        return chatClient
                .prompt()
                .user(u->u
                        .text("""
                                게시글 제목을 보고 카테고리를 분류한다.
                                카테고리는 [공지, 질문, 후기, 잡담] 중 하나이다.
                                
                                제목: 3회차 스터디 일정 안내드립니다
                                카테고리: 공지
                                
                                제목: @Transactional이 적용이 안 되는데 왜 그럴까요?
                                카테고리: 질문
                                
                                제목: 2회차 스터디 다녀왔습니다
                                카테고리: 후기
                                
                                제목: 다들 점심 뭐 드셨나요
                                카테고리: 잡담
                                
                                제목: {title}
                                카테고리: 
                                """)
                        .param("title",title))
                .call()
                .content();

    }

}
