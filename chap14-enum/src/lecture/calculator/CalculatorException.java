package lecture.calculator;

// 사용자 정의 예외
public class CalculatorException extends RuntimeException {

    private final CalculatorErrorCode errorCode;

    public CalculatorException(CalculatorErrorCode errorCode) {
        super(errorCode.getMessgae());
        this.errorCode = errorCode;
    }

    // Getter
    public CalculatorErrorCode getErrorCode() {
        return errorCode;
    }
}
