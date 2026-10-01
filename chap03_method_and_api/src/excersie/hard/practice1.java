package excersie.hard;

import java.util.Scanner;

public class practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("첫번째 정수를 입력하세요 : ");
        int num1 = sc.nextInt();

        System.out.print("두번째 정수를 입력하세요 : ");
        int num2 = sc.nextInt();

        System.out.print(
                """
                        원하는 연산 기호의 숫자를 입력하세요
                        + : 1
                        - : 2
                        * : 3
                        / : 4
                        
                        입력 :
                        """
        );
        int op = sc.nextInt();

        switch (op) {
            case 1:
                System.out.println("+ 연산 결과 입니다 : " + add(num1, num2));
                break;
            case 2:
                System.out.println("- 연산 결과 입니다 : " + subtract(num1, num2));
                break;
            case 3:
                System.out.println("* 연산 결과 입니다 : " + multiply(num1, num2));
                break;
            case 4:
                if(num2==0){
                    System.out.println("0 으로 나눌 수 없습니다.");
                    break;
                }
                System.out.println("/ 연산 결과 입니다 : " + divide(num1, num2));
                break;
            default:
                System.out.println("지원하지 않는 연산입니다.");
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

