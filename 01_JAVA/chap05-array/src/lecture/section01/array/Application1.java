package lecture.section01.array;

public class Application1 {
    public static void main(String[] args) {
        /*
        * 배열
        * - 동일한 자료형의 묶음
        * */

        // 배열의 선언 및 할당
        int [] arr = new int[5];

        for(int i = 0; i<5; i++) {
            arr[i] = 10*(i+1);
            System.out.println("arr["+ i +"] = " + arr[i]);
        }


    }
}