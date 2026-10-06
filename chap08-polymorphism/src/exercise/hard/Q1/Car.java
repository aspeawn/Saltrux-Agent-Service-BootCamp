package exercise.hard.Q1;

public class Car extends Vehicle {
    private String feulType;

    public Car(String feulType) {
        this.feulType = feulType;
    }

    @Override
    public void move() {
        System.out.println("자동차가 도로를 달립니다.");
    }


}
