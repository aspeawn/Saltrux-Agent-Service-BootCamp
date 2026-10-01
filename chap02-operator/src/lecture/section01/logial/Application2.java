package lecture.section01.logial;

public class Application2 {
    public static void main(String[] args) {

        // && || 의 우선순위
        // 논리 연산자 중에서는 && 연산이 || 보다 먼저 실행된다.
        boolean result1 = true || false && true;
        boolean result2 = true || false && false; // true
        boolean result3 = (true || false) && false; // false
        System.out.println("result1 = " + result1);
        System.out.println("result2 = " + result2);
        System.out.println("result3 = " + result3);

        // 아래의 alpha 변수에 담긴 값이 알파벳인지 판별하는 코드를 작성하세요
        char alpha = 'f';
        boolean answer = true, answer2 = true;

        // 결과값 알파벳이면 true 아니면 false가 나와야합니다

        boolean isUpperCase = alpha >= 'A' && alpha <= 90;
        boolean isLowerCase = alpha >= 'a' && alpha <= 122;

        answer = isLowerCase || isUpperCase;

        System.out.println(answer);
//        answer = (alpha > 'a' && alpha <'z');
//        answer2 = (alpha > 'A' && alpha < 'Z');

//        System.out.println("answer = " + answer + answer2);
    }
}
