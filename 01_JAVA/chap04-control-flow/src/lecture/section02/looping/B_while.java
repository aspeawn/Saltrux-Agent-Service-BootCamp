package lecture.section02.looping;

import java.util.Scanner;

public class B_while {
    /*
     * 초기식;
     *
     * while(조건식) {
     *   반복시키고 싶은 구문
     *
     *   증감식;
     * }
     *
     * */
    public void samplewhile() {
        int i = 1; // 초기식
        while (i <= 10) {
            i++;
        }

        while (true) {

            Scanner sc = new Scanner(System.in);
            int num = sc.nextInt();

            if (num == 5){
                break;
            }

            System.out.println("5가 아닙니다.");
        }
    }
}
