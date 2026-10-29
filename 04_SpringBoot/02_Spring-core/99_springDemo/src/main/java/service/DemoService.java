package service;

import org.springframework.stereotype.Service;
import repository.DemoRepository;
import repository.MemberRepository;


@Service
public class DemoService {

    private final DemoRepository demoRepository;
    private final MemberRepository memberRepository;

    public DemoService(DemoRepository demoRepository, MemberRepository memberRepository) {
        this.demoRepository = demoRepository;
        this.memberRepository = memberRepository;
    }
}
