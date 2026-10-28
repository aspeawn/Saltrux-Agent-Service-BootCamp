package lecture.calculator;

// 계산 메소드 만들어놓은 클래스
public class Calculator {
    private int num;

    // 기본 생성자

    // double로 리턴
    // dobule로 매개변수 두 개를 받아서 더해주는 메소드
    public double add(double firstNumber, double secondNumber) {

        return firstNumber + secondNumber;
    }

    public double divide(double firstNumber, double secondNumber) {
        if (secondNumber == 0 ) {
            System.out.println("0으로 나눌수없음");
            throw new CalculatorException(CalculatorErrorCode.DIVIDE_BY_ZERO);
        }
        return firstNumber / secondNumber;
    }


//    // 매개변수를 가진 생성자 -> 이걸 만들면 컴파일러에서 기본 생성자는 이제 안 만들음
//    public Calculator(int num) {
//        this.num = num;
//    }
}
