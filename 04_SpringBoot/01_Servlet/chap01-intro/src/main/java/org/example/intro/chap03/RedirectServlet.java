package org.example.intro.chap03;


import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/chap03/redirect")
public class RedirectServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        // 쿼리 요청
        String message = req.getParameter("message");

        // 새 속성 설정 but redirect라 메시지가 사라질것임
        req.setAttribute("moveType", "FORWARD");
        req.setAttribute("message", message);

        // 리다이렉트 할 URL 생성
        String redirectUrl = req.getContextPath() + "result?mesage=" + message;

        resp.sendRedirect(redirectUrl);
    }
}
