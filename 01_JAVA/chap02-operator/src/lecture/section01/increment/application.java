package lecture.section01.increment;

public class application {
    public static void main(String[] args) {
        /*
        * 증감연산자
        * 변수의 값을 1증가시키거나 1감소시키는 연산자
        * */

        int num = 20;
        System.out.println("num = " + num);

        ++num; //--num;

        System.out.println("num++ = " + num);

        /*
        * 전위 연산자(++num) : 값을 먼저 증가, 증가된 값 사용
        * 후위 연산자(num++) : 기존 값을 먼저 사용하고 변수의 값 증가시킴
        * */

        int firstNum = 20;
        int postResult = firstNum++ * 3;  // 후위 연산
        System.out.println("postResult = " + postResult);

        int lastNum = 20;
        int result = ++lastNum * 3;   // 전위 연산

        System.out.println("lastNum = " + lastNum);
        System.out.println("result = " + result);
    }
}
