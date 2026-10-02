package lecture.section03;

import java.util.Scanner;

public class Application {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // 자동차 객체
        Car car = new Car();

        // 자동차 운전자
        CarRacer carRacer = new CarRacer();

        carRacer.setCar(car);
        carRacer.startUp();

        car.startUp();  // 시동걸기
        car.go();   // 속도올리기
        car.stop(); // 정지하기
        car.turnOff(); // 시동끄기

        while(true) {
            System.out.println("======== 카레이싱 프로그램 ==========");
            System.out.println("1. 시동 걸기");
            System.out.println("2. 전진");
            System.out.println("3. 정지");
            System.out.println("4. 시동 끄기");
            System.out.println("9. 프로그램 종료");
            System.out.print("메뉴 선택 : ");
            int no = sc.nextInt();

            switch(no) {
                case 1 : carRacer.startUp(); break;
                case 2 : carRacer.stepAccelator(); break;
                case 3 : carRacer.stepBreak(); break;
                case 4 : carRacer.turnOff(); break;
                case 9 : System.out.println("프로그램을 종료합니다."); break;
                default : System.out.println("잘못된 번호를 선택하셨습니다."); break;
            }

            if(no == 9) {
                break;
            }
        }
    }

}
