package exercise.hard.Q1;

public class Q1 {
    public static void main(String[] args) {
        Vehicle[] vehicles = new Vehicle[2];
        vehicles[0] = new Car("가솔린");
        vehicles[1] = new Boat("단단한 선체");

        for (Vehicle vehicle : vehicles) {
            vehicle.move();
        }
    }
}
