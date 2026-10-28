package lecture.section01.extend;
/*
* 레이싱카는 멈출 수 없다
* run() -> 레이싱카가 질주함
* soundHorn() -> 경적 x
* stop() -> 상태 바꾸지 x
* */

public class RacingCar extends Car {
    @Override
    public void run() {
        runningStatus = true;
        System.out.println("레이싱 카가 질주합니다!!");
    }

    @Override
    public void soundHorn() {
        System.out.println("레이싱 카는 경적을 울릴 수 없습니다.");
    }

    @Override
    public void stop() {
        System.out.println("레이싱 카는 멈출 수 없습니다.");
        System.out.println(this.toString());
    }
}
