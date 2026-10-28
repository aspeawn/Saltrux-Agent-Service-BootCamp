package lecture.section01.list.run;

import java.time.LocalDateTime;
import java.util.*;

public class Application1 {
    public static void main(String[] args) {
        /*
        * ArrayList
        * - 배열의 단점을 보완
        * - 크기변경, 요소의 추가삭제, 정렬기능을 구현해놓았다.
        * */

        ArrayList arrayList = new ArrayList();
        List arrList = new ArrayList();             // 다형성 적용

        // List의 사용
        // 123, 45.53 -> 기본자료형 -> Heap
        // "apple", LocalDateTime.now() -> Stack -> Wrapping Class
        arrList.add("apple");
        arrList.add(123);
        arrList.add(45.53);
        arrList.add(LocalDateTime.now());

        System.out.println("arrList = " + arrList); // toSTring이 오버라이딩 되어있다.

        System.out.println("arrList.size() = " + arrayList.size()); // list의 크기

        System.out.println("arrList.get(0) = " + arrList.get(0)); // 인덱스 사용 가능

        arrayList.add(1,"banana");  // 추가
        System.out.println("arrList = " + arrList);
        arrList.remove(1);  // 삭제
        System.out.println("arrList = " + arrList);
    }
}
