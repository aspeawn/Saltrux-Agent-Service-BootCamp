package lecture.section02;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.function.*;

public class Application0 {
    /*
     * 표준 함수적 인터페이스
     * Runnable : 매개변수 X, 리턴값 X : run()
     * Consumer : 매개변수 O, 리턴값 X : accept()
     * Supplier : 매개변수 X, 리턴값 O : get()
     * Function : 매개변수 O, 리턴값 O : apply()
     * Operator : 매개변수 O, 리턴값 O : apply() * 매개변수와 Return 타입이 동일
     * Predicate: 매개변수 O, 리턴값 O : test() * Boolean값을 리턴
     * */

    // JAVA에서는 메소드가 무조건 객체 안에 있어야하므로 람다식을 구현하기 위해 인터페이스가 필요함
    // 하지만 이렇게 람다식을 할 때 인터페이스를 일일이 만들기 힘드므로
    // JAVA에서는 형태에 따라 인터페이스를 라이브러리에 미리 구현해놨음
    public static void main(String[] args) {
        /*
        * int : 반환형
        * int 매개변수 2
        * */
        BinaryOperator<Integer> bo = (a, b) -> a+b;
        System.out.println(bo.apply(5,4));

        // Runable
        // Runnable : 매개변수 X, 리턴값 X : run()
        Runnable runnable = () -> System.out.println("runnable 실행");
        runnable.run();

        // Consumer : 매개변수 O, 리턴값 X : accept()
        Consumer<String> consumer = (str) -> System.out.println(str);
        consumer.accept("안녕하세요");

        // Supplier : 매개변수 X, 리턴값 O : get()
        Supplier<LocalDateTime> supplier = () -> {return LocalDateTime.now();};
        Supplier<LocalDateTime> supplier2 = () -> LocalDateTime.now();

        System.out.println(supplier.get());

        // Function : 매개변수 O, 리턴값 O : apply()
        Function<String, Integer> function = (str) -> {return Integer.parseInt(str);};
        System.out.println(function.apply("50") + 5);

        // Predicate : 매개변수 O, 리턴값 O : test() * Boolean값을 리턴
        Predicate<Integer> isEven = n -> n%2 ==0;
        System.out.println(isEven.test(6));
    }
}
