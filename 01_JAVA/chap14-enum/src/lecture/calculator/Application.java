package lecture.calculator;

import java.util.Scanner;

public class Application {
    public static void main(String[] args) {

        // 생성자 호츌
        Calculator calculator = new Calculator();

        // 사용자 입력을 받기 위한 스캐너
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("====== 계산기 프로그램 ======");

            System.out.println("연산자를 입력하세요 (+, /, 종료 : exit)");
            try {
                String operator = sc.nextLine().trim();

                if (operator.equals("exit")) {
                    System.out.println("계산기를 종료합니다.");
                    break;
                }

                // 실수를 입력받는 메소드
                double firstNumber = inputNumber(sc, "첫번째 숫자를 입력하세요 : ");
                double secondNumber = inputNumber(sc, "두번째 숫자를 입력하세요 : ");
                double result = 0;

                switch (operator) {
                    case "+":
                        result = calculator.add(firstNumber, secondNumber);
                        break;
                    case "/":
                        result = calculator.divide(firstNumber, secondNumber);
                        break;
                    default:
                        // +, /, exit 외에 다른 문자열이면 예외를 던지기
                        throw new CalculatorException(CalculatorErrorCode.INVALID_OPERATOR);
                }

                System.out.println("계산결과 : " + firstNumber + " " + operator + " " + secondNumber + " = " + result);
            } catch (CalculatorException e) {
                GlobalExceptionHandler.handle(e);
            }

        }


    }

    // 두 실수를 입력받는 메소드
    private static double inputNumber(Scanner scanner, String message) {
        System.out.print(message);
        String input = scanner.nextLine().trim();

        try {
            return Double.parseDouble(input);       // 사용자의 입력이 실수로 변환이 안될경우 예외발생!
        } catch (NumberFormatException e) {
            throw new CalculatorException(CalculatorErrorCode.INVALID_NUMBER);
        }
    }
}
