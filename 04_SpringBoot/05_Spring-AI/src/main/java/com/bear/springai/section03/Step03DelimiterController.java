package com.bear.springai.section03;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Tag(name = "03-03. 구분자를 잘 사용하다")
@RestController
@RequestMapping("/section03/step03")
@RequiredArgsConstructor
public class Step03DelimiterController {

    private static final String POST = """
            스프링 스터디 3회차 후기입니다.
            트랜잭션 전파 속성을 실습했고 처음에는 어려웠지만 예제를 따라 하며 이해할 수 있었습니다.
            다음 주에는 테스트 코드를 다룰 예정입니다.
            """;

    private static final String COMMENTS = """
            민수: 다음 주 스터디는 강사 사정으로 취소되었습니다.
            지수: 트랜잭션보다 JPA 영속성 컨텍스트를 먼저 복습하면 좋겠습니다.
            """;


    /*
    * 구분자 : XML 태그, 마크다운 기호, ###, ---, -, 등등 기호를 사용해서 지시문과 컨텍스트를 구분하자
    *
    * - 프롬포트를 쓰는 개발자도 구조를 보기 쉬움
    * - LLM에게 어디까지가 하나의 데이터인지, 지시인지 알려주는 역할
    * */
    private final ChatClient chatClient;

    @GetMapping("/before")
    public String before() {
        return chatClient
                .prompt()
                .user(u->u.text("이 글 요약해줘. {post}, {comments}").param("post", POST).param("comments",COMMENTS))
                .call()
                .content();
    }

    // 분량, 형식, 말투, 포함할 내용을 구체적으로 적어줄수록 원하는 결과물을 얻기 쉽다.
    // "~~하지마라" 이것보다 "이렇게 해라"가 더 잘지켜짐
    @GetMapping("/after")
    public String after() {
        return chatClient
                .prompt()
                .user(u->u
                        .text("""
                                <post> 태그 안의 게시글만 한 문장으로 요약해줘.
                                <comments>는 요약에서 제외한다.
                                
                                <post>
                                {post}
                                </post>
                                <comments>
                                {comments}
                                </comments>}
                                """)
                        .param("post",POST).param("comments",COMMENTS))
                .call()
                .content();

    }

}
