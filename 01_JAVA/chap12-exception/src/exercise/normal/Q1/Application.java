package exercise.normal.Q1;

import lecture.section02.userexception.exception.NegativeException;

public class Application {
    public static void main(String[] args){
        ExceptionTest et = new ExceptionTest();

        try {
            et.Numbertest(10);
        } catch (NegativeNumberException e) {
            System.out.println("음수는 입력할 수 없습니다.");
            e.getMessage();
        }

        try {
            et.Numbertest(-10);
        } catch (NegativeNumberException e) {
            System.out.println("음수는 입력할 수 없습니다.");
            e.getMessage();
        }

        System.out.println("프로그램을 종료합니다.");
    }
}
