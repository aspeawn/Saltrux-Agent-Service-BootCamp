package lecture.section02.abstractclass;

// 추상 클래스
// abstract로 선언해줘야함.
public abstract class Product {

    // 추상 클래스는 필드를 가질 수 있음
    private int nonStaticField;
    private static int staticField;

    public Product() {

    }

    // 일반 메소드도 가질 수 있다.
    public void nonStaticMethod() {
        System.out.println("Product의 nonStaticMethod 호출함...");
    }

    public void StaticMethod() {
        System.out.println("Product의 StaticMethod 호출함...");
    }

    // 추상 메소드 {}가 없어야함 (구현부)
    public abstract void abstMethod();
}
