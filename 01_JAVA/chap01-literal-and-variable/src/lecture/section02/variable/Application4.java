package lecture.section02.variable;

public class Application4 {
    public static void main(String[] args) {
        // 상수 : 변하지 않는 값

        int age = 10;
        System.out.println(age);

        age = 20;
        System.out.println(age);

        // final 키워드 -> 한번 초기화하면 값을 변경 불가능함
        final int MAX_AGE = 25;
    }
}
