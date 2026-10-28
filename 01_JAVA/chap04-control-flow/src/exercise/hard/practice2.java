package exercise.hard;

import java.util.Scanner;

public class practice2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("과일 이름을 입력하세요 : ");
        String fruit = sc.next();

        if(fruit.equals("사과"))
                System.out.println(fruit + "의 가격은 " + 2000 +"원 입니다.");
        else if (fruit.equals("바나나")) {
            System.out.println(fruit + "의 가격은 " + 3000 + "원 입니다.");
        }
        else if (fruit.equals("복숭아")) {
            System.out.println(fruit + "의 가격은 " + 1500 + "원 입니다.");
        }
        else if (fruit.equals("키위")) {
            System.out.println(fruit + "의 가격은 " + 5000 + "원 입니다.");
        }
        else System.out.println("준비된 상품이 없습니다.");

    }
}

