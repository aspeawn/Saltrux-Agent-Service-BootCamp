package exercise.hard.Q3;

import exercise.hard.Q1.*;

public class VehicleFactory {
    public static Vehicle create(String type){
        if(type.equals("car")) {
            return new Car("가솔린");
        } else if (type.equals("boat")) {
            return new Boat("FRP");
        }
        else{
            return new Vehicle(0);
        }
    }
    public static void runVehicle(Vehicle v){
        v.move();
    }
}
