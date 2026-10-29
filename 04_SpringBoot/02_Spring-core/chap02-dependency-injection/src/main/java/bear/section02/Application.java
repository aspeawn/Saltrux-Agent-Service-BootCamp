package bear.section02;

import bear.section02.common.NotificationClient;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Application {
    public static void main(String[] args) {

        // 설정 파일을 등록함 (App Context)
        ApplicationContext context = new AnnotationConfigApplicationContext(ContextConfiguration.class);

        String[] beans = context.getBeanDefinitionNames();

        for(String bean : beans) {
            System.out.println("bean = " + bean);
        }

        NotificationClient notificationClient = context.getBean(NotificationClient.class);

        notificationClient.send("hello@gmail.com", "가입 환영");
    }
}
