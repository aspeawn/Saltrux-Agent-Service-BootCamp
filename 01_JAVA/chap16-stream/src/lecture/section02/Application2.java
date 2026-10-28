package lecture.section02;

import java.util.function.Predicate;
import java.util.stream.IntStream;

public class Application2 {

    public static void main(String[] args) {
        /*
        * Stream<T> map(Function<? super T, ? extends R > mapper
        * 스트림에서 들어있는 데이터를 특정 람다식을 통해 데이터를 가공하고
        * 새로운 스트림에 담아줌
        * */
        IntStream intStream = IntStream.range(0, 10);   // 스트림은 1회용!!



        // 체이닝 : .을 이용해 메소드 연계해서 사용
       intStream.filter((i) -> (i%2)==0)        //  짝수만 다음 stream으로 넘김
                        .map(i -> i*5)
                        .forEach(System.out::println);

       IntStream intStream2 = IntStream.range(0, 10);   // 스트림은 1회용이라 새로 안만들어주면 오류 발생

        intStream2
                .filter((i) -> (i % 2) == 0) // 짝수만 다음 stream으로 넘긴다.
                .mapToDouble(i -> i * 5)
                .forEach(System.out::println);
    }
}
