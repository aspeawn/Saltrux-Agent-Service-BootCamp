package lecture.section01.conditional;

import java.util.Scanner;

public class A_if {
    /*
    * if문 작성법
    *
    * if([조건식]) {
    *   [조건식이 true일 때 동작할 코드]
    * } else if([조건식 #2]) {
    *   [두번 째 조건식이 true일 때 동작할 코드]
    * } else {
    *   [전부다 false 일 경우 동작할 코드]
    * }
    * */

    public void testSimpleIf() {
        /*
        * 전달된 정수가  짝수면 "짝수입니다."
        * 아니면 "홀수입니다."
        * */
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        // 조건식 : 연산의 결과가 true/false
        if ((num % 2) == 0) {
            System.out.println("짝수입니다.");
        } else {
            // 참이 아닐 경우 동작
            System.out.println("홀수입니다.");
        }

        System.out.println("프로그램을 종료합니다." + "");
    }
}

