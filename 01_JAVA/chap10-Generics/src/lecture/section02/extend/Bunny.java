package lecture.section02.extend;

public class Bunny extends Rabbit{
    public Bunny() {
    }

    @Override
    public void cry() {
        System.out.println("Bunny가 웁니다!");
    }
}
