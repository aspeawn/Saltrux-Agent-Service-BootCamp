package exercise.hard.Q1;

public class Vehicle {
    private int maxSpeed;

    public Vehicle(int i) {
        this.maxSpeed = i;
    }

    // 기본생성자 -> 컴파일러가 만들어줌 : 하나라도 다른 생성자가 있으면 만들지 못함
    public Vehicle() {

    }

    public void move() {
        System.out.println("차량이 이동합니다.");
    }


}
