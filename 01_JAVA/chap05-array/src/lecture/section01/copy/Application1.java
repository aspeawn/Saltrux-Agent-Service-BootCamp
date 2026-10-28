package lecture.section01.copy;

public class Application1 {
    public static void main(String[] args) {

        int age = 10;
        int age2 = age; // 복사

        /*
        * 배열의 복사
        * - 얕은 복사 : stack의 주소값만 복사
        * - 깊은 복사 : heap배열의 저장된 값을 새로운 주소값로 복사
        * */

        int[] originArr = {1,2,3,4,5};  // 원본 배열
        int[] copyArr = originArr;  // 얕은 복사

        System.out.println(originArr.hashCode());
        System.out.println(copyArr.hashCode());

        copyArr[0] = 99;    // 복사본만 수정

        System.out.println("originArr[0] = " + originArr[0]);
        System.out.println("copyArr[0] = " + copyArr[0]);
    }
}
