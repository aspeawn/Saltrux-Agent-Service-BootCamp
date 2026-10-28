package lecture.section4.exercise;

public class Application {
    public static void main(String[] args) {
        /*
        * FireCar와 RacingCar는 앞으로 갈 수 있다. ( go() )
        * - ex) System.out.println("소방차가 앞으로 갑니다...)
        * FireCar와 RacingCar는 멈출 수 있다. ( stop() )
        * - ex) System.out.println("소방차가 멈춥니다...)
        * FireCar만 경적을 울릴 수 있다. ( horn() )
        *
        * 상속과 구현을 이용해서 완성해보세요
        * */

        FireCar fireCar = new FireCar();
        RacingCar racingCar = new RacingCar();

        fireCar.go();
        fireCar.stop();
        fireCar.horn();
        System.out.println("============");

        racingCar.go();
        racingCar.stop();
    }
}
