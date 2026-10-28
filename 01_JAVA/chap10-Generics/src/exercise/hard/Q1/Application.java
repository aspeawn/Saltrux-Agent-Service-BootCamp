package exercise.hard.Q1;

public class Application {
    public static void main(String[] args) {

        Box<String> bs = new Box<>();

        Box<Integer> bi = new Box<>();

        bs.setData("Hello, Generics");
        bi.setData(123);

        System.out.println(bs.getData());
        System.out.println(bi.getData());

    }
}
