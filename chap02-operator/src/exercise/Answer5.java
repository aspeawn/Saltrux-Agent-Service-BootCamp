package exercise;

public class Answer5 {
    /*
     * 문제 5. 삼항 연산자로 숫자 분류
     *
     * number 변수에 -7을 저장한다.
     * 중첩 삼항 연산자를 사용해 양수, 0, 음수 중 하나를 sign에 저장한다.
     * 삼항 연산자와 % 연산자를 사용해 짝수 또는 홀수를 parity에 저장한다.
     * if와 switch는 사용하지 않는다.
     *
     * 실행 결과
     * -7은 음수이면서 홀수입니다.
     */

    public static void main(String[] args) {
        int number = -7;
        String sign = number>0 ? "양수": number==0 ? "0" : "음수";
        String parity = -7%2 ==0 ? "짝수" : "홀수";

        System.out.println(number + "은 " + sign + "이면서 " + parity + "입니다.");
    }
}
