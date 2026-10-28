package lecture.section01.logial;

import jdk.swing.interop.SwingInterOpUtils;

public class Application4 {
    public static void main(String[] args) {
        /*
        * 삼항연산자
        * [조건식] ? [true일 때 사용할 값] : [false일 때 사용할 값]
        * */

        int num = 10;

        boolean result = num > 0;

        // num이 0보다 크면 양수다 라고 콘솔에 출력하고 0보다 작으면 음수다라고 콘솔에 출력
        // 0또는 0보다 작으면 음수다라고 콘솔에 출력

        String result2 = num > 0 ? "양수다" : "음수다";
        System.out.println("result2 = " + result2);

        // 앞에서부터 끊기 -> : 뒤에가 하나로 묶인 단위로 생각하기
        // num > 0이 false이면, {(num ==0) ? "0이다" : "음수다"}가 result3에 결과로 담김
        String result3 = num > 0? "양수다" : (num == 0) ? "0이다" : "음수다";


        /*
        * 점수에 따라 A
        * A 90점 이상
        * B 80점 이상
        * C 나머지 모두
        * 삼항연산자로 만들어보세요
        * */
        int score = 95; // B

        String grade = ""; // A, B, C
        grade = score>=90? "A" : score>=80? "B" : "C";

        System.out.println("grade = " + grade);
    }
}
