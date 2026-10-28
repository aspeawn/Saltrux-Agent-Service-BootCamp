package exercise.advanced;

import java.util.Scanner;

public class practice5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("높이를 입력하세요 : ");
        int height = sc.nextInt();

        for(int i =0;i<height;i++){
            for(int n = 0;n<height;n++){
                System.out.println(" ");
            }
            for(int m = 0;m<height*2+1;m++){
                System.out.println("*");
            }
        }
    }
}
