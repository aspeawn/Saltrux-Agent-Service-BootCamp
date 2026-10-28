package lecture.section01.extend;

// 부모 클래스
public class Car {

    public Car() {
        System.out.println("Car의 기본 생성자가 호출되었습니다...");
    }

    // 달리는 중인지 상태
    protected boolean runningStatus;

    // 출력문으로 경적 울리기
    public void soundHorn() {
        if(isRunning()) {
            System.out.println("빵 ! 빵 !");
        } else {
            System.out.println("주행중이 아닐 경우에는 경적을 울릴 수 없습니다.");
        }
    }

    // private 키워드이면 자식에서 사용 불가능
    protected boolean isRunning() {
        return runningStatus;
    }

    // 멈추는 기능
    public void stop() {
        runningStatus = false;
        System.out.println("자동차가 멈춥니다.");
    }

    // 달리는 기능
    public void run() {
        runningStatus = true;
        System.out.println("자동차가 주행 중입니다.");
    }

    // toString() -> System.out.println(car); 으로 할 시 주소값이 뜨게 되는데
    // 최상위 부모 클래스인 Object에 있는 메소드인 toString으로 재작성시 객체의 필드값을 확인 가능함
    // System.out.println(car.toString()) , (car) 둘 다 가능함
    @Override
    public String toString() {
        return "Car{" +
                "runningStatus=" + runningStatus +
                '}';
    }
}
