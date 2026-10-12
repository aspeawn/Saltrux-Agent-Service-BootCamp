package lecture.section01;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Application0 {
    public static void main(String[] args) {
        /*
        * Stream
        * - 컬렉션에 저장된 요소들을 하나씩 순회하면서 처리할 수 있는 기능
        * */

        List<String> strList = new ArrayList<>(Arrays.asList("hello", "world", "stream"));

        // 1.
        for(String str : strList) {
            System.out.println(str);
        }

        // 2.
        strList.forEach(str-> System.out.println(str));
        // 컬렉션 안에 구현되어있는 forEach()

        // 3.
        strList.stream().forEach(str -> System.out.println(str));


        IntStream intStream = IntStream.range(5,10);
        intStream.forEach(i-> System.out.println(i));
        Stream<String> stringStream = Stream.of("java", "html", "myspl");
        Stream<String> stringStream2 = Stream.of("jdbc", "js");

        // Stream은 동일 타입 스트림으로 합칠 수 있다.
        Stream<String> concatStream = Stream.concat(stringStream, stringStream2);
        concatStream.forEach((str) -> System.out.println(str));
    }
}