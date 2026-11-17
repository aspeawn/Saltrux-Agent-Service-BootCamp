package com.bear.studyboard.monitoring.section02.counter;

import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.stereotype.Component;

@Component
public class PostCreatedCounter {

    private final Counter counter;

    public PostCreatedCounter(MeterRegistry meterRegistry) {
        // 카운터의 이름
        // -> 프로메테우스에서 쓰는 낱말(예약어)은 피해서 이름을 지어야한다.
        this.counter = Counter.builder("study.post.creation")
                .description("등록에 성공한 게시글 수")
                .register(meterRegistry);
    }

    // 게시글 등록됐을때 카운팅을 할 메서드 (1씩 증가)
    public void increase() {
        counter.increment();
    }
}
