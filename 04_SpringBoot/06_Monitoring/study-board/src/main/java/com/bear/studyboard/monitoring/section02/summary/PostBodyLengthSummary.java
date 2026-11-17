package com.bear.studyboard.monitoring.section02.summary;

import io.micrometer.core.instrument.DistributionSummary;
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.stereotype.Component;

import java.time.Duration;

// 백분위수
@Component
public class PostBodyLengthSummary {

    private final DistributionSummary summary;

    public PostBodyLengthSummary(MeterRegistry meterRegistry) {

        this.summary = DistributionSummary.builder("study.post.body.length")
                .description("등록된 게시글 본문의 글자 수")
                .publishPercentiles(0.5, 0.95)
                .distributionStatisticExpiry(Duration.ofMinutes(30)) // 30분 원래 기본값은 2분
                .register(meterRegistry);
    }

    // 글자수 기록
    public void record(String body) {
        int length = 0;
        if(body != null) {
            length = body.length();
        }

        summary.record(length);
    }
}
