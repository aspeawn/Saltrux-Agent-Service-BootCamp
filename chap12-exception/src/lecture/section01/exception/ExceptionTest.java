package lecture.section01.exception;

public class ExceptionTest {

    public void CheckEnoughMoney(int price, int money) throws Exception {
        System.out.println("가지고 있는 돈은 " + money + "원입니다.");

        if(money>=price) {
            System.out.println("상품 구매가 가능합니다!");
        } else {

            // 강제로 예외를 발생
            // throw 예외(인스턴스)
            throw new Exception();
        }

        // 예외가 발생할 경우 실행이 안됨
        System.out.println("즐거운 쇼핑하세요");
    }
}
