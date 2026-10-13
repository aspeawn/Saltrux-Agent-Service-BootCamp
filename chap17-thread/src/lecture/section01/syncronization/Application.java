package lecture.section01.syncronization;

public class Application {

    public static void main(String[] args) {
        Account account = new Account();

        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                    account.withdraw(300);
            }
        }, "일꾼1");

        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                account.withdraw(300);
            }
        }, "일꾼2");

        t1.start();
        t2.start();
    }
}
