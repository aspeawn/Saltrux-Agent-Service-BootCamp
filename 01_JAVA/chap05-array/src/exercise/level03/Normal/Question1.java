package exercise.level03.Normal;

import java.util.Scanner;

public class Question1 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int[][] arr = new int[2][3];

        // 2줄 입력 받고, 2줄을 출력해야함
        for (int i = 0; i < arr.length /* 2 */; i++) {

            String str = sc.nextLine();
            String[] num = str.split(" ");

            for(int j = 0; j <arr[i].length/* 3 */;j++){
                arr[i][j] = Integer.parseInt(num[j]);
            }
        }

        // 2줄 출력
        for(int i=0; i<arr.length;i++){
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }

    }
}
