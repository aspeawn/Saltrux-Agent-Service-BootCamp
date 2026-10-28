package lecture.section01.copy;

import java.util.Arrays;
import java.util.Collections;

public class Application2 {
    public static void main(String[] args) {
        // 깊은복사
        int[] originArr = new int[] {1,2,3,4,5};

        print(originArr);

        // clone() : Object, heap영역의 공간 자체를 복사하고 새로운 주소값 반환
        int[] copyArr = originArr.clone();
        print(copyArr);

        copyArr[0] = 99;
        System.out.println("--------------------------------");
        print(originArr);  // 원본
        print(copyArr);  // 복사본

        int[] copyArr2 = new int[10];

        // arraycopy(원본배열, 복사를 시작할 인덱스, 복사본배열, 복사를 시작할 인덱스, 복사할 길이)
        System.arraycopy(originArr, 0, copyArr2, 3, originArr.length);

        print(copyArr2);

        // Arrays.sort() : 배열 정렬
        Arrays.sort(copyArr2);
        print(copyArr2);

        // 내림차순
        // wrappingClass : 기본 자료형
        Integer[] numbers = {5,3,2,4,1};
        Arrays.sort(numbers, Collections.reverseOrder()); // 내림차순

        System.out.println(Arrays.toString(numbers));

    }

    public static void print(int[] iarr) {

        System.out.println("iarr의 hashcode : " + iarr.hashCode());

        for(int i = 0; i < iarr.length; i++) {
            System.out.print(iarr[i] + " ");
        }
        System.out.println();
    }
}
