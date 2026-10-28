package exercise.level03.hard;

import java.util.Scanner;

public class Question2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        int [][] arr = new int[3][];

        // 가변 배열 (행과 열의 개수가 동일하지 않음)
        for (int i = 0; i<3 ; i++) {
            System.out.println(i+1+"행의 열 개수를 정하세요.");
            int n = sc.nextInt(); sc.nextLine();
            arr[i] = new int[n];        // 행마다 열의 개수를 n으로 설정
        }


        String [][] str = new String[3][];
        System.out.println("배열 값을 입력하세요: ");
        // 입력
        for (int i = 0; i < arr.length; i++) {
            str[i] = (sc.nextLine()).split(" ");  // 입력 공백 없애고 str[]에 저장
            for (int j = 0; j < arr[i].length; j++) {
                arr[i][j] = Integer.parseInt(str[i][j]);
            }
        }

        // 출력
        for (int i = 0; i < arr.length; i++) {
            int sum = 0;
            for (int j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];

            }
            System.out.println("행 "+i+"의 합: " + sum);
        }
    }
}
