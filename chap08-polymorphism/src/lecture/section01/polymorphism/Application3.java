package lecture.section01.polymorphism;

public class Application3 {
    public static void main(String[] args) {
        Tiger tiger = new Tiger();
        Rabbit rabbit = new Rabbit();
        feed(tiger);
        feed(rabbit);

        getRandomAnimal().cry();
    }


    // 매개변수에 다형성 적용
    public static void feed(Animal animal) {

        animal.eat();
    }

    // return타입에 다형성 적용
    public static Animal getRandomAnimal() {

        int random = (int) (Math.random()*2);   // 1 or 0

        // 0이면 Rabbit, 이외의 값 Tiger
        return random == 0? new Rabbit(): new Tiger();
    }

}
