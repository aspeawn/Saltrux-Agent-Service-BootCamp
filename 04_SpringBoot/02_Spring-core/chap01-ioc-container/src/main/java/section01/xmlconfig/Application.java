package section01.xmlconfig;

import common.MemberDTO;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

public class Application {

    public static void main(String[] args) {

        // Application Context를 만들 것
        // xml 파일을 읽어서 설정 파일을 가져오는 메소드
        ApplicationContext context =
                new GenericXmlApplicationContext("xmlconfig/spring-context.xml");    // AppContext -> Bean을 관리하는 객체

        // 객체를 직접 만들이 않음에도 ApplicationContext가 객체를 만들어서 가져와줌
        MemberDTO member1 = (MemberDTO) context.getBean("member");
        System.out.println("member1 = " + member1);
        
        // 클래스의 메타 정보를 이용해 가져오는 방법
        MemberDTO member2 = context.getBean(MemberDTO.class);
        System.out.println("member2 = " + member2);

        // 클래스의 메타정보를 이용해 가져오는 방법
        MemberDTO member3 = context.getBean("member", MemberDTO.class);
        System.out.println("member3 = " + member3);
    }
}
