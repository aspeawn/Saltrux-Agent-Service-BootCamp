package lecture.section02.userexception.exception;
/*
* 사용자 정의 예외
* */
public class PriceNegativeException extends NegativeException {
    public PriceNegativeException() {
    }

    // 예외 설명을 전달해서 Throwable(부모) 필드에 저장
    public PriceNegativeException(String message) {
        super(message);
    }
}
