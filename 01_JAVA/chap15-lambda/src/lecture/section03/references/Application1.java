package lecture.section03.references;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

public class Application1 {
    public static void main(String[] args) {
        List<String> subjects = new ArrayList<>();
        subjects.add("java");
        subjects.add("mysql");
        subjects.add("jdbc");
        subjects.add("html");
        subjects.add("css");

        // stream : 배열이나 컬렉션을 좀 더 잘다루기위한 문법
        // Function <? super T, ? extends R> mapper
        // 리스트의 모든 요소를 대문자로 만드는 코드

        Function<String, String> fucntion = (str) -> str.toUpperCase();

        /*
         * 메소드 참조
         * - 이미 존재하는 메소드를 람다식에서 호출 할 때 사용하는 축약 문법
         *
         * 클래스이름::메소드이름
         * 참조변수이름::메소드이름
         * */
        subjects.stream()
                .map(String::toUpperCase)
//                .map(str) -> str.toUppercase();
                .forEach(System.out::println);

        subjects.forEach(Example::printName);
    }
}
