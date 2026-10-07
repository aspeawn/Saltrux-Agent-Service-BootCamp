package lecture.section02.string;

public class Application2 {

    /*
    * String Pool
    * - Heap 메모리 영역중 특수한 공간, 리터럴 형태로 생성된 문자열을 관리
    * - 동일한 문자열이 존재할 경우에 같은 인스턴스를 재사용해 메모리 사용을 최적화
    * */

    public static void main(String[] args) {
        String str1 = "java";
        String str2 = "java";

        System.out.println("str1 == str2 : " + (str1 == str2)); // 주소값 비교 true (stack 영역의 주소값)
        // 같은 주소를 참조하고 있구나!

        System.out.println("str1.equls(str2) : " + (str1.equals(str2))); // 값 비교 true

        String str3 = new String("java");
        System.out.println("str1 == str3 : " + (str1 == str3)); // 주소값 비교 false

        // 문자열의 값자체를 비교하겠다
        // equals() : String 클래스의 equals는 인스턴스가 아닌 문자열 값을 비교하도록 오버라이딩 되어있음
        // -> 문자열이 같은 문자열인지 확인하기 위해서는 == 연산 대신 equals 메소드를 써야한다.

    }
}
