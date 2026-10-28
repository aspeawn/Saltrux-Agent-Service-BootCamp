package lecture.section01.conditional;
import java.util.Scanner;

public class B_if_elseif {
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();
    public void testitself()
    {
        // 조건식 : 연산의 결과가 true/false
        if (num == 0) {
            // 조건식이 참일때 동작
            System.out.println("0입니다.");
        } else if ((num % 2) == 0) {
            // 두번째 조건식이 참일때 동작
            System.out.println("짝수입니다.");
        } else {
            // else : 참이 아닐경우 동작
            System.out.println("홀수입니다.");
        }
    }
}
