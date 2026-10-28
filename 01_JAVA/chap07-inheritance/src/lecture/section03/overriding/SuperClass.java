package lecture.section03.overriding;

// 부모클래스
// 클래스에 final 키워드를 붙이면 상속을 제한한다.
public class SuperClass {
    /*
    * 오버라이딩 성립요건
    * 1. 메소드의 이름이 동일해야함
    * 2. 메소드의 리턴 타입이 동일해야함
    * 3. 매개변수의 타입, 개수, 순서가 동일해야함
    * 4. 접근이 가능해야 오버라이딩이 가능함 (접근제어자가 부모 메소드보다 같거나 더 넓어야함)
    * 5. final 키워드가 사용된 메소드는 오버라이딩이 불가하다.
    * */

    public void method(int num) {};         // 일반 메소드

    private void privateMethod() {};        // 프라이빗 메소드

    public final void finalMethod() {};     // final 메소드

    protected void protectedMethod() {;}    // protected 메소드

    
}
