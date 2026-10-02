package exercise.level03.hard;

import java.util.Arrays;
import java.util.Collections;

public class Question3 {
    public static void main(String[] args) {
        int[] origin = {1, 2, 3};

        // 얕은복사 -> 주소 참조
        int[] shallow = origin;

        // 얕은 복사된 배열 값 수정하기
        shallow[0] = 99;
        System.out.print("[얕은 복사] origin : ");
        for (int i = 0; i < origin.length; i++) {
            System.out.print(shallow[i] + " ");
        }

        // 깊은복사 -> heap에 공간 만들고 값 대입
        int[] deep = new int[origin.length];

        for (int i = 0; i < origin.length; i++) {
            deep[i] = origin[i];
        }
        System.out.println();

        deep[0] = 0;

        System.out.print("[깊은 복사] origin : ");
        for (int i = 0; i < origin.length; i++) {
            System.out.print(origin[i] + " ");
        }
        System.out.println();

        System.out.print("[깊은 복사] deep : ");
        for (int i = 0; i < origin.length; i++) {
            System.out.print(deep[i] + " ");
        }
        System.out.println();
    }
}
