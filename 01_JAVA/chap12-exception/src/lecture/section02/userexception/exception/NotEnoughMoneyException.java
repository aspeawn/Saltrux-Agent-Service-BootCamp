package lecture.section02.userexception.exception;

public class NotEnoughMoneyException extends NegativeException {

    public NotEnoughMoneyException(String s) {
//        super(s);
        System.out.println("돈이 부족합니다!!");
    }
}
