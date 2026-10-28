package lecture.section03.overriding;

// 자식클래스
public class SubClass extends SuperClass{

    // 메소드 이름, 리턴타입, 매개변수 타입, 순서가 일치해야함.
    @Override
    public void method(int num) {

    }

    // private 메소드는 접근이 불가하여 오버라이딩을 할 수 없다.
//    @Override
//    private void finalMethod(int num) {
//
//    }

    // final로 선언된 메소드는 오버라이딩 불가
//    @Override
//    public final finalMethod() {}

    // 부모 메소드의 접근제어자와 같거나 더 넓은 범위로 오버라이딩해야함.
//    @Override
//    protected void protectedMethod() {} //  같은 범위 가능

//    @Override
//    public void protectedMethod() {} // 넓은 범위 가능

}
