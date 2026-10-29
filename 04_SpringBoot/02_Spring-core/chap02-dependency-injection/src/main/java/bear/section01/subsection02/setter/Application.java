package bear.section01.subsection02.setter;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Application {

    public static void main(String[] args) {

        ApplicationContext context = new AnnotationConfigApplicationContext("bear.section01");

        BookService bookService = context.getBean("bookServiceSetter", BookService.class);

        // 동작 확인
        System.out.println("bookService = " + bookService);
    }
}
