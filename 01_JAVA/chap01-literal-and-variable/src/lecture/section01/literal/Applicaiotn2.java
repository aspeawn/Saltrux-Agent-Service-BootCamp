package lecture.section01.literal;

public class Applicaiotn2 {
    public static void main(String[] args) {

        // 정수끼리의 연산
        System.out.println(12 - 34);
        System.out.println(12 * 34);
        System.out.println(12 + 34);
        System.out.println(12 / 34);
        System.out.println(12 % 34);

        System.out.println(10 / 4.0);  // 실수의 결과가 나옴
        System.out.println(0.1 + 0.2); // 0.3

        // 부동소수점
        // 10진소수를 2진소수로 표현할 수 없는 경우가 있음
        // 소수를 가장 가까운(근사값) 저장해서 계산하게됨 -> 오차가 생길 수 있음.

        // 실수가 포함된 연산
        System.out.println("===== 실수가 포함된 연산 =====");

        System.out.println("===== 실수가 포함된 연산 =====");

        // 문자열 연산
        System.out.println("====== 문자열 연산 =======");
        System.out.println("hello"+"world");
        System.out.println("hello"+100);
        System.out.println("123"+100);      // int형의 100은 문자열로
        System.out.println("123"+"100");
        System.out.println("123"+true);
    }
}
