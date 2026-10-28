package lecture.section03;

import java.util.OptionalDouble;
import java.util.OptionalInt;
import java.util.stream.IntStream;

public class Application1 {

    public static void main(String[] args) {

        // 최소, 최대, 총합, 평균 ..

        long count = IntStream.range(1, 10).count(); // 요소의 갯수 반환
        System.out.println("count = " + count);


        long sum = IntStream.range(1, 10).sum(); // 요소의 총합 1~9
        System.out.println("sum = " + sum);

        // Optional : 있을 수도 있고 없을 수도 있는 값을 의미
        OptionalDouble average = IntStream.range(1, 10).average(); // 요소의 총합 1~9
        System.out.println("average = " + average.getAsDouble());


        // Optional : 있을 수도 있고 없을 수도 있는 값을 의미
        OptionalInt max = IntStream.range(1, 10).max(); // 요소의 총합 1~9
        System.out.println("average = " + max.getAsInt());

        // 홀수들의 총합을 구하기
        int oddSum = IntStream.range(1,10)
                .filter(i->i%2==1)
                .sum();
        System.out.println("oddSum = " + oddSum);


    }
}
