package lecture.section01.main_thread;

public class Application {
    public static void main(String[] args) {

        // 추상화
        Thread current = Thread.currentThread();
        System.out.println("지금 이 코드를 수행하는 스레드 = " + current.getName());

        // main 스레드 1개가 모든 반복을 처리함
        for (int i = 1; i <= 5; i++) {
            System.out.println("[" + current.getName() + "]" + i + "번 작업처리");
        }

        // 현재 JVM이 사용할 수 있는 CPU 코어 갯수
        int cores = Runtime.getRuntime().availableProcessors();
        System.out.println("cores = " + cores);     // 16개
    }
}
