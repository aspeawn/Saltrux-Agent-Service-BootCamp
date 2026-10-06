package exercise.hard.Q1;

public class Boat extends Vehicle{
    private String hullType;

    public Boat(String hullType) {
        this.hullType = hullType;
    }

    @Override
    public void move() {
        System.out.println("보트가 물 위를 떠다닙니다.");
    }
}
