package lecture.section03.interfaceimplements;

// 클래스에서 인터페이스를 상속받을 때는 impliments 키워드를 사용함
// 인터페이스는 여러개를 상속받을 수 있음
public class Product extends Object implements InterProduct, Test{
    @Override
    public void nonStaticMethod() {
        System.out.println("Product 클래스에서 구현한 nonStaticMethod");
    }

    @Override
    public void abstMethod() {
        System.out.println("Product 클래스에서 구현한 abstMethod");
    }

    @Override
    public void testMethod() {
        System.out.println("Product 클래스에서 구현한 testMethod");
    }
}
