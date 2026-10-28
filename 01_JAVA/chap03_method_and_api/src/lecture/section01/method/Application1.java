package lecture.section01.method;

public class Application1 {
    // 메인 메소드
    public static void main(String[] args) {
        System.out.println("main 메소드 실행됨...");

        // 객체 생성
        Application1 app1 = new Application1();

        // method A 호출
        app1.methodA();
        app1.methodB();
        app1.methodC();

        System.out.println("main 메소드 종료됨...");
    }

    // 반환값이 없고 어디서든 접근 가능, 메소드 명 methodA
    public void methodA() {
        System.out.println("methodA() 호출됨 ....");

        return;
    }

    public void methodB() {
        System.out.println("methodB() 호출됨 ....");

        return;
    }

    public void methodC() {
        System.out.println("methodC() 호출됨 ....");

        return;
    }
}
