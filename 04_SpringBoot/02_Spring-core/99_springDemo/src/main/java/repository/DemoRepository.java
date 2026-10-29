package repository;

import org.springframework.stereotype.Repository;
import service.DemoService;

@Repository
public class DemoRepository {

    private final DemoService demoService;

    public DemoRepository(DemoService demoService) {
        this.demoService = demoService;
    }
}
