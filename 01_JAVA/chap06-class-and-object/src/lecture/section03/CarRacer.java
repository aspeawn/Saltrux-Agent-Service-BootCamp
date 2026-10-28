package lecture.section03;

public class CarRacer {

    private Car car = new Car();

    // getter
    public Car getCar() {
        return car;
    }

    // setter
    public void setCar(Car car) {
        this.car = car;
    }

    public void startUp() {
        car.startUp();
    }

    public void stepAccelator() {
        car.go();
    }

    public void stepBreak() {
        car.stop();
    }

    public void turnOff() {
        car.turnOff();
    }
}
