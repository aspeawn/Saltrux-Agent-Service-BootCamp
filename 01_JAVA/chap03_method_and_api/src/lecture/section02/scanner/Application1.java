package lecture.section02.scanner;
import java.io.*;
import java.util.Scanner;

public class Application1 {
    public static void main(String[] args) {
        // 스캐너 객체를 만들어줘야함
        Scanner sc = new Scanner(System.in);

        System.out.println("sc = " + sc);

        // nextLine() : 입력을 받을 수 있음
        // 입력받은 값을 문자열로 반환해줌
        System.out.println("이름을 입력해주세요 : ");
        String name = sc.nextLine();

        System.out.println("이름은 " + name + "입니다.");

        // nextInt() : 입력받은 값을 정수형으로 반환해줌
        System.out.println("나이를 입력해주세요 : ");
        int age = sc.nextInt();
        System.out.println("나이는 " + age + "입니다.");

        sc.next();
    }
}