package lecture.section01.main_thread;

// Runnable 구현체 : 추상 메소드 run() 하나 뿐인 함수형 인터페이스
public class PrintingTask implements Runnable {

    // final 키워드 -> 값을 변경 불가능한데 초기화 없이 실행되면, 값이 없고 메모리에 껍데기 상태로 존재
    private final String taskName;
    private final int count;


    // 객체를 만들 때 필드에 꼭 초기화를 해야함
    // why? final 키워드에 의해 메모리에 올라갈 경우 변경할 수 없기 때문에
    public PrintingTask(String taskName, int count) {
        this.taskName = taskName;
        this.count = count;
        System.out.println(taskName + "작업이 생성됨(" + count + ")회짜리");
    }

    // 스레드가 수행할 일
    @Override
    public void run() {
        for (int i = 1; i <= count; i++) {
            System.out.println(taskName
                    + "을 [" + Thread.currentThread().getName()
                    + "]이" + i + "회차 수행함.");

            try {
                Thread.sleep(1000);  // 일하는데 걸리는 시간 (1000밀리초 : 1초)
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
