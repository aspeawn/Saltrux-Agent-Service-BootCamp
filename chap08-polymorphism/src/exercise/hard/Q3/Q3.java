package exercise.hard.Q3;

import exercise.hard.Q1.*;

public class Q3 {
    public static void main(String[] args) {
        Vehicle v1 = VehicleFactory.create("car");
        Vehicle v2 = VehicleFactory.create("boat");

        VehicleFactory.runVehicle(v1);
        VehicleFactory.runVehicle(v2);
    }
}
