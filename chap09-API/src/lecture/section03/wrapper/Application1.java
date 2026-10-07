package lecture.section03.wrapper;

public class Application1 {
    public static void main(String[] args) {
        /*
         * Wrapping class
         * - 기본 자료형을 객체로 감싸주는 클래스 (byte, short, int, long, float, double, boolean)
         * */

        int primitive = 20;             // 기본자료형
        Integer wrapper = primitive;    // Auto Boxing
        int result = wrapper;           // AUto Unboxing

        /*
        * 문자열을 기본 타입으로 변경할 때
        * parse() : 해당 문자열을 인자로 받아서 원하는 타입으로 변환
        * */

        int age = Integer.parseInt("20");   //
        double height = Double.parseDouble("167.6");
        boolean active = Boolean.parseBoolean("ture");

        System.out.println(age);
        System.out.println("age = " + age + 1);
        System.out.println("height = " + height + 1);
        System.out.println("active = " + active);

//        Integer.parseInt("20세"); // 문자인 "세"가 들어가서 숫자로 변경할 수 없다 예외
    }


}
