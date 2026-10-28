package lecture.section02.package_and_import;


/*
 * 패키지
 * - 서로 관련있는 클래스 등을 모아 하나의 그룹으로 구성하는 것을 의미
 * */

public class Application1 {
    public static void main(String[] args) {
        int result = lecture.section01.method.Calculator.sum(3, 5);

        System.out.println("result = " + result);

        // 다른 클래스의 메소드 사용하기
        lecture.section01.method.Calculator calculator = new lecture.section01.method.Calculator();

        int result2 = calculator.minus(10, 5);
        System.out.println("result2 = " + result2);
    }
}