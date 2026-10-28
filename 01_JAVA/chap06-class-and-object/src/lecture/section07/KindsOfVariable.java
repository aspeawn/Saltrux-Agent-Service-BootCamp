package lecture.section07;

public class KindsOfVariable {

    // 인스턴스변수 / 필드 / 멤버변수
    private int globalNum;

    // 정적변수 / 정적필드
    private static int staticNum;

    public void testMethod(int arg /* 매개변수 */) {
        int localNum; // 지역변수
    }

    // static 정적변수가 아니면 인스턴스(객체)가 만들어져야 사용가능하다
    public static void main(String[] args) {
        // System.out.println(localNum);
//        System.out.println(globalNum);  // 전역변수는 다른 메소드에서 사용가능
        System.out.println(staticNum);
    }


}
