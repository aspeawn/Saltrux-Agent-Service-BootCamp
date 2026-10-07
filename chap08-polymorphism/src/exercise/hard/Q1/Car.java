package exercise.hard.Q1;

public class Car extends Vehicle {
    private String feulType;

    public Car(String feulType) {
        super();
        this.feulType = feulType;
    }

    public String getFeulType() {
        return feulType;
    }

    @Override
    public void move() {
        System.out.println("자동차가 도로를 달립니다.");
    }


}
