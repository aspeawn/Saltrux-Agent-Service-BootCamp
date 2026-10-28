package lecture.section01.conditional;
import java.util.Scanner;

public class C_switch {
    /*
    * switch(비교할변수) {
    *   case 비교값1 : 비교값1과 일치하는 경우 실행할 구문;
    *       break;
    *   case 비교값2 : 비교값2과 일치하는 경우 실행할 구문;
    *       break;
    *   case 비교값3 : 비교값3과 일치하는 경우 실행할 구문;
    *       break;
    *   defalut : case에 모두 속하지 않는 경우 실행할 구문
    *       break;
    *
    * */

    public void calcualtorWithSwitch() {
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
                System.out.println("+ 연산 결과 입니다 : "+ add(num1, num2));
                break;
            case 2:
                System.out.println("- 연산 결과 입니다 : "+ subtract(num1, num2));
                break;
            case 3:
                System.out.println("* 연산 결과 입니다 : "+ multiply(num1, num2));
                break;
            case 4:
                System.out.println("/ 연산 결과 입니다 : "+ divide(num1, num2));
                break;
            default:
                System.out.println("아무 케이스도 속하지 않는 경우 입니다.");
        }
    }
public void calcualtorWithSwitch2() {
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
            case 1->
                System.out.println("+ 연산 결과 입니다 : "+ add(num1, num2));

            case 2->
                System.out.println("- 연산 결과 입니다 : "+ subtract(num1, num2));
            case 3->
                System.out.println("* 연산 결과 입니다 : "+ multiply(num1, num2));
            case 4->
                System.out.println("/ 연산 결과 입니다 : "+ divide(num1, num2));
            default->
                System.out.println("아무 케이스도 속하지 않는 경우 입니다.");
        }
    }

    public int add(int x, int y) {

        return x+y;
    }

    public int subtract(int x, int y) {

        return x-y;
    }

    public int multiply(int x, int y) {

        return x*y;
    }

    public double divide(int x, int y) {

        return (double)x/y;
    }
}
