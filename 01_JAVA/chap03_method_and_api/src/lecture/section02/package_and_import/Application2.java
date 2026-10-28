package lecture.section02.package_and_import;
import lecture.section01.method.Calculator;

import static lecture.section01.method.Calculator.sum;
public class Application2 {
    public static void main(String[] args) {
        int result = sum(10, 10);

        System.out.println("result = " + result);

        // 다른 클래스의 메소드 사용하기
        Calculator calculator = new Calculator();

        int result2 = calculator.minus(10, 5);
        System.out.println("result2 = " + result2);
    }
}
