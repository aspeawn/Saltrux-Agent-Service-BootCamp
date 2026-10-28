package exercise.normal.Q1;

import lecture.section02.userexception.exception.NegativeException;

public class ExceptionTest {

    public void Numbertest (int num) throws NegativeNumberException {

        if(num<0) {
            throw new NegativeNumberException("(Exception Test) NegativeNumber Exception 발생");

        } else {
            System.out.println("적절한 수 입니다.");
        }
    }

}


// 1. 메소드에 throws 키워드로 예외를 던지는 방법 -> 이 메소드를 호출한 상위 메소드에 짬때림
// 이후 상위 메소드에서 try catch로 예외처리

// 2. try catch finally문으로 직접 예외처리하는 방법
// try : 예외 발생할 수 있는 가능성이 있는 구문
// catch : Exception 클래스 타입에 해당하는 처리를 기술하는 블록
// -> 여러개의 예외 타입에 처리 가능하며 상위 타입이 나중에(아래) 와야함
// finally : 예외 발생 여부와 상관없이 항상 처리하는 곳으로 java.io, java.sql 패캐지의 메소드 처리 시 자원 반납을 위해 사용

