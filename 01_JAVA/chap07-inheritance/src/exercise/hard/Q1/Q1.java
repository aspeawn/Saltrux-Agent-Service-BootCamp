package src.exercise.hard.Q1;

public class Q1 {
    public static void main(String[] args) {
        Vehicle[] vehicles = new Vehicle[2];
        vehicles[0] = new Car();
        vehicles[1] = new Boat();

        for (Vehicle vehicle : vehicles) {
            vehicle.move();
        }
    }
}
