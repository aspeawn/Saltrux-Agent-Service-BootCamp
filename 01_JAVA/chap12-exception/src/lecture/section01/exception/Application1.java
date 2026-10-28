package lecture.section01.exception;

public class Application1 {
    public static void main(String[] args) throws Exception {

        ExceptionTest et = new ExceptionTest();
        /*
        * 예외의 처리 방법
        * 1. throws로 위임
        * 2. try-cath로 처리
        * */

        et.CheckEnoughMoney(10000, 50000);
        et.CheckEnoughMoney(50000,10000);   // 예외발생지점

        // 예외발생으로 인해 출력이 안됨
        System.out.println("프로그램을 종료합니다.");

        try {
            et.CheckEnoughMoney(50000, 10000);

            // 예외가 발생하게되면 바로 catch로 이동해 코드가 진행된다.
            System.out.println("checkEnoughMoney가 실행되었습니다.");
        } catch (Exception e) {

            // 예외가 발생했을 때 동작할 처리
            System.out.println("예외가 발생했습니다.");
            throw  new RuntimeException(e);
        }

        // 예외발생으로 인해 출력이 안됨
        System.out.println("프로그램을 종료합니다.");
    }
}
