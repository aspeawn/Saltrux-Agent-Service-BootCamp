package lecture.section01.array;

public class Application2 {
    public static void main(String[] args) {
        /*
        * 배열의 선언
        * */

        int[] iarr;
        char carr[];

        // 배열을 할당하여 대입 할 수 있다.
        // new : heap 영역에 공간을 할당하고 주소값을 반환하는 키워드
        // 만든 주소를 stack 영역에 저장하고
        // 주소를 참고해 사용하기 때문에 참조 자료형이라고 함
        iarr = new int[10];
        carr = new char[5];

        // hash : heap 영역에 생성된 데이터를 고유한 정수값으로 확인할 때 사용
        System.out.println("iarr = " + iarr.hashCode());  // 주소값
        System.out.println("carr = " + carr.hashCode());

        // 배열의 길이
        System.out.println("carr.length = " + carr.length);
        System.out.println("iarr.length = " + iarr.length);  // 주소값

        iarr = new int[5];

        System.out.println("iarr = " + iarr.hashCode());  // 주소값
        System.out.println("iarr.length = " + iarr.length);
    }
}
