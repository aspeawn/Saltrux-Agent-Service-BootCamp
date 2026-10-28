package lecture.section01.method;

public class Application2 {
    // 메인메서드
    public static void main(String[] args) {
        System.out.println("main 메서드 실행됨...");

        // 객체 생성
        Application2 app1 = new Application2();

        app1.methodA();

        System.out.println("main 메서드 종료됨...");
    }

    //메서드 작성해보기
    public void methodA() {

        System.out.println("methodA() 호출됨 ....");

        methodB();

        System.out.println("methodA() 종료됨 ....");
        return;
    }

    public void methodB() {

        System.out.println("methodB() 호출됨 ....");

        methodC(); // 메소드 C 호출

        System.out.println("methodB() 종료됨 ....");
        return;
    }

    public void methodC() {

        System.out.println("methodC() 호출됨 ....");
        System.out.println("methodC() 종료됨 ....");
        return;
    }
}
