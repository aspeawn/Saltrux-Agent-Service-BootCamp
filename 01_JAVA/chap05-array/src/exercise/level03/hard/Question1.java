package exercise.level03.hard;

import java.util.Arrays;
import java.util.Scanner;

public class Question1 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int[] arr = new int[5];
        System.out.print("정수 5개를 입력하세요 : ");

        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }

        Arrays.sort(arr);

        System.out.println("정렬된 값 : ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]+" ");
        }
    }
}
