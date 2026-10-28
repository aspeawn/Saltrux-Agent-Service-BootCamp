package exercise.hard.Q1;

public class Application2 {
    public static void main(String[] args) {
        MultiBox<String, Integer> box1 = new MultiBox<>();
        MultiBox<Double, String> box2 = new MultiBox<>();

        box1.setFirstData("Hello");
        box1.setSecondData(100);
        box1.printData();

        box2.setFirstData(45.67);
        box2.setSecondData("World");
        box2.printData();

    }
}
