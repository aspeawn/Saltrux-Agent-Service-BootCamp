package excersie.hard;

import java.util.Scanner;

public class practice2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("나이를 입력하세요 : ");
        int age = sc.nextInt(); sc.nextLine();      // 입력할 때 엔터를 누르면서 "\n" 개행문자가 빈 문자열이 name에 들어감

        System.out.print("이름을 입력하세요 : ");
        String name = sc.nextLine();

        System.out.print("좋아하는 색을 한 단어로 입력하세요 : ");
        String color = sc.next();

        System.out.println("나이 : " + age);
        System.out.println("이름 : " + name);
        System.out.println("좋아하는 색 : " + color);
    }
}
