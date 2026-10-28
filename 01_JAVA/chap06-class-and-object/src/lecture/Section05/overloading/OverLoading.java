package lecture.Section05.overloading;

import java.util.Arrays;

public class OverLoading {

    // 매개변수의 종류별로 메소드 내용을 다르게 해야하는 경우

    /*
    * 오버로딩의 조건
    * - 한 클래스내에서 동일한 이름을 가진
    *   메소드의 매개변수 선언부에 타입, 갯수, 순서를 다르게
    *
    * - 메소드 시그니처
    *   - 메소드의 메소드 명과 매개변수 선언부를 의미
    *   -
    * */

    public void test() {}
    public void test(int num) {}  // 오버로딩
    public void test(int num, String name) {}   // 오버로딩

    static void main() {
        // 구현된 오버로딩에서
//        Arrays.sort();
    }
}
