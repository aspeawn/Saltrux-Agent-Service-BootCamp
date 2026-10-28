package exercise.hard;

import java.util.Scanner;

public class practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("첫 번째 정수 : ");
        int a = sc.nextInt();

        System.out.print("두 번째 정수 : ");
        int b = sc.nextInt();

        System.out.print("연산 기호를 입력하세요 : ");
        String op = sc.next();

        switch (op) {
            case "+":
                System.out.println(a + " " + op + " " + b + " = " + add(a, b));
                break;
            case "-":
                System.out.println(a + " " + op + " " + b + " = " + subtract(a, b));
                break;
            case "*":
                System.out.println(a + " " + op + " " + b + " = " + multiply(a, b));
                break;
            case "/":
                System.out.println(a + " " + op + " " + b + " = " + divide(a, b));
                break;
            default:
                System.out.println("입력하신 연산은 없습니다. 프로그램을 종료합니다.");
        }
    }

    public static int add(int x, int y) {
        return x + y;
    }

    public static int subtract(int x, int y) {
        return x - y;
    }

    public static int multiply(int x, int y) {
        return x * y;
    }

    public static double divide(int x, int y) {
        return (double) x / y;
    }
}
