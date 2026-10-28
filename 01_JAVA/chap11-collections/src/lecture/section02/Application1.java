package lecture.section02;

import java.util.*;


public class Application1 {
    public static void main(String[] args) {
        /*
        * HashSet
        * - Set 인터페이스에서 가장 많이 사용되는 구현체
        * - 요소의 순서를 유지하지 x
        * - 같은 요소의 중복저장을 허용하지 않음
        * */

        HashSet<String> hset = new HashSet<>();

        // 다형성을 사용해 상위 인터페이스 타입으로 사용 가능
//        Set hset2 = hset;
//        Collection hset3 = hset;

        hset.add("java");
        hset.add("mysql");
        hset.add("jdbc");
        hset.add("html");
        hset.add("css");

        // 저장 순서 유지 안됨
        System.out.println("hset = " + hset);
        System.out.println("hset = " + hset.size());

        // 중복 허용 안함
        System.out.println("============ 중복 추가 ============");
        hset.add("java");
        System.out.println("hset = " + hset);

        // 저장된 내용을 한개씩 꺼내는 기능이 없음
        System.out.println("============ 배열로 변환해서 요소 꺼내기 ============");
        Object[] arr = hset.toArray();
        for(Object obj : arr) {
            System.out.println("obj = " + obj);
        }
        hset.toArray();


        // Iterator (반복자)
        // - 컬렉션에서 값을 읽어오는 방식을 통일하기위해 사용
        // hasNext() : 다음 요소가 있으면 true, 없으면 false 반환
        // next() : 다음 요소를 반환, 가리키는 요소를 다음으로 넘어감

        Iterator<String> iter = hset.iterator();

        while (iter.hasNext()) {
            System.out.println("iter.next() = " + iter.next());
        }
    }
}
