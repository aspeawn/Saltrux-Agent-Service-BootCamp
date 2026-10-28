package lecture.section03.map.run;

import java.util.Date;
import java.util.HashMap;

public class Application1 {

    public static void main(String[] args) {

        /*
        * Map
        * - Key와 Value를 하나의 쌍으로 저장하는 방식
        *
        * Key
        * - 값을 찾기 위한 역할을 하는 객체를 의미
        * - 요소의 저장 순서를 유지하지 않는다.
        * - 키값은 중복이 안된다.
        * */

        HashMap hmap = new HashMap();

        hmap.put("one", new Date());
        hmap.put(12, "red apple");
        hmap.put(33, 33);

        System.out.println("hmap = " + hmap);

        // key 값 중복저장
        // value의 값이 덮어씌워진다.
        hmap.put(12, "blue banana");
        System.out.println("hmap = " + hmap);
        hmap.put(13, "blue banana");
        System.out.println("hmap = " + hmap);

        // map의 자료 조회
        // .get(key) : key에 해당하는 value를 반환
        System.out.println("hmap.get(\"one\") = " + hmap.get("one"));

        // map의 삭제
        // .remove(key)
        hmap.remove("one");
        System.out.println("hmap = " + hmap);

    }
}
