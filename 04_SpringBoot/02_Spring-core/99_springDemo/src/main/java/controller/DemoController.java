package controller;

import org.springframework.stereotype.Controller;
import service.DemoService;

@Controller
public class DemoController {

    private final DemoService demoService;

    public DemoController(DemoService demoService) {
        this.demoService = demoService;
    }
}
