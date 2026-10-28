package lecture.section03.references;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.function.Consumer;
import java.util.function.Function;

public class Applcation0 {

    public static void main(String[] args) {


        List<String> names = Arrays.asList("홍길동", "유관순", "이순신");

        Consumer<String> consumer = (str) -> System.out.println(str);

        names.forEach((str) -> System.out.println(str));
        names.forEach(System.out::println);
//        names.forEach(consumer);
    }
}
