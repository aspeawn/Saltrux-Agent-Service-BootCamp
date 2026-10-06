package lecture.section01.polymorphism;

// 컴파일 -> java -class

// 런타임 -> class -> 실행될 때

public class Application1 {
    public static void main(String[] args) {

        Animal animal = new Animal();
        animal.cry();
        Tiger tiger = new Tiger();
        tiger.cry();
        tiger.bite();
        Rabbit rabbit = new Rabbit();
        rabbit.cry();

        /*
        * 동적 바인딩
        * - 컴파일 당시에는 해당 타입의 메소드를 가리키다가
        * - 런타임 당시 실제 객체가 가진 오버라이딩된 메소드로 바인이 바뀌어 동작하는 것
        * */

        System.out.println("=========================");
        Animal a1 = new Tiger();
        a1.cry();

        Animal a2 = new Rabbit();
        a2.cry();

        // 레퍼런스타입이 Animal이기 때문에, Rabiit과 Tiger가 가진 고유한 기능을 동작시키지 못함
//        a1.bite();
//        a2.jump();

        System.out.println("========== 형 변환 ==========");
        ((Tiger) a1).bite();
        ((Rabbit) a2).jump();

        // 타입형변환을 잘못하는 경우 컴파일시에는 문제가 되지 않는데, 런타임시 Exception(예외)가 발생함
//        ((Rabbit) a1).jump();

        System.out.println("instanceof 연산자 ====================");
        System.out.println("a1이 Tiger 타입인지 확인 : " + (a1 instanceof Tiger));
        System.out.println("a1이 Animal 타입인지 확인 : " + (a1 instanceof Animal));
        System.out.println("a1이 Object 타입인지 확인 : " + (a1 instanceof Object));
        System.out.println("a1이 Rabbit 타입인지 확인 : " + (a1 instanceof Rabbit));

        if(a1 instanceof Tiger) {
            ((Tiger) a1).bite();
        }

        // 부모 타입이 자식 타입으로 저장될순 없음.
//        Tiger t1 = new Animal();
        /*
        * up-casting : 상위 타입으로 형변환 -> 안써줘도 형변환이 가능
        * down-casting : 하위 타입으로 형변환 -> 명시를 해주어야한다.
        * */

        Animal animal1 = new Rabbit();  // up-casting
        Rabbit rabbit1 = (Rabbit) animal1; // down-casting

    }
}
