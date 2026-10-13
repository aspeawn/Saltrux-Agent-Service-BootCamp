package lecture.section01.main_thread;

public class Application2 {
    public static void main(String[] args) throws InterruptedException {

        PrintingTask myTask = new PrintingTask("빨래", 3);

        // 스레드 만들기
        Thread worker = new Thread(myTask, "일꾼-1");     // 일꾼을 고용
        /*
        * worker.start() : 새 스레드를 만들어서 해당 스레드에게 run을 실행하라 -> 진짜 병렬 실행
        * worker.run() : 새 스레드를 만들지 않고 main 스레드가 run을 실행 -> 병렬이 아님
        *
        * run을 사용하면 일꾼을 고용하고 내(main)가 일하는 셈 -> 스레드 호출을 위해 start 사용하기
        * */
        worker.start();

        // 두가지 스레드 (main, 일꾼-1) 동시에 작업을 함
        for (int i = 1; i < 5; i++) {
            System.out.println(
                    "설거지를" + "["
                    + Thread.currentThread().getName() + "]"
                    + i + "번 작업처리"
            );
            Thread.sleep(1000);
        }
    }
}
