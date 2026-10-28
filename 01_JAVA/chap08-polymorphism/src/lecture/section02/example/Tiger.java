package lecture.section02.example;

public class Tiger extends Animal {
    @Override
    public void eat() {
        System.out.println("🐯호랑이가 사냥감을 뜯어먹습니다.");
    }

    @Override
    public void run() {
        System.out.println("🐯호랑이가 달려갑니다.");
    }

    @Override
    public void cry() {
        System.out.println("🐯호랑이가 울음소리를 냅니다.");
    }

    public void bite() {
        System.out.println("🐯호랑이가 물어뜯습니다.");
    }
}
