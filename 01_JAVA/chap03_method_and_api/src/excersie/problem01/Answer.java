package excersie.problem01;

import java.util.*;

public class Answer {


    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("첫 번째 정수 입력 : ");
        int firstNumber = sc.nextInt();

        System.out.println("두 번째 정수 입력 : ");
        int SecondNumber = sc.nextInt();

        Answer calculator = new Answer();
        int additionResult = calculator.add(firstNumber, SecondNumber);
        int subtractionResult = calculator.substract(firstNumber, SecondNumber);
        int multiplicationResult = calculator.multiply(firstNumber, SecondNumber);
        double divisionResult = calculator.divide(firstNumber, SecondNumber);

        System.out.println("덧셈 결과 : " + additionResult);
        System.out.println("뺄셈 결과 : " + subtractionResult);
        System.out.println("곱셈 결과 : " + multiplicationResult);
        System.out.println("나눗셈 결과 : " + divisionResult);
    }
    public int add(int a, int b) {
        return a+b;
    }

    public int substract(int a, int b) {
        return a-b;
    }

    public int multiply(int a, int b) {
        return a*b;
    }

    public double divide(int a, int b) {
        return a/b;
    }

}

