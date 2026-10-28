package org.example.intro.chap01;

import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;

import java.io.IOException;

@WebServlet(value = "/life-cycle")
public class LifeCycleTest extends HttpServlet {

    private int initCount = 1;
    private int serviceCount = 1;
    private int destoryCount = 0;

    // init() : 최초 서블릿 요청시 호출되는 메소드
    @Override
    public void init() throws ServletException {
        System.out.println("init() => " + (++initCount));
    }
    // 출력할 때 한글을 쓰면 외부 Tomcat WebServer를 사용하고 있어 글자가 깨짐 -> 따로 인코딩해줘야함

    // destory() : 서블릿 컨테이너가 종료될 떄 호출되는 메소드
    @Override
    public void destroy() {
        System.out.println("destoryCount() => " + (++destoryCount));
    }

    // 서블릿 컨테이너에 의해 호출되고
    // 최초 요청 시 init() 다음에 동작 / 이후 요청을 받을 때마다 service() 동작
    @Override
    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
        System.out.println("service() => " + (++serviceCount));
    }
}

