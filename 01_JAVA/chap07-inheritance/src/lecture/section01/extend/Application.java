package lecture.section01.extend;

public class Application {
    /*
    * 상속
    * - 부모 클래스가 가지고 있는 멤버를 자식 클래스가 물려받음
    * - JAVA에서는 모든 클래스가 Object(최상위 부모클래스)를 상속받은 클래스
    *
    * 상속 사용방법
    * - 클래스명에 extends (상속받을 클래스명) 붙여서 정의한다.
    *
    * 메소드 재정의(OverRiding) / @Override
    * - 부모의 메소드를 그대로 사용하면서 자식 클래스에서 정의한대로 동작하도록 구현함
    * - 재정의한 메소드가 우선적으로 동작한다.
    *
    * */


    public static void main(String[] args) {

//        Car car = new Car();
        FireCar car = new FireCar();
        RacingCar rc = new RacingCar();
        car.run();
        car.soundHorn();
        car.stop();
        car.soundHorn();
        car.sprayWater();
        System.out.println("------------------");
        rc.run();
        rc.soundHorn();
        rc.stop();
    }
}
