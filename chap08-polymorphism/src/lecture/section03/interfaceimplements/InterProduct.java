package lecture.section03.interfaceimplements;

public interface InterProduct {
    /*
    * 인터페이스
    * - 상수필드와 추상메소드만 가질 수 있다.
    * - 클래스를 작성하기 위한 틀
    * - 특정 클래스를 작성할 때 ~~ 형식으로 작성해야한다는 틀
    * - 상속이 아니라 구현한다는 표현으로 함 -> implements로 구현체를 구현클래스에서 작성함
    * */

    // 상수 : 대문자와 _로 단어를 구분하게끔 표기한다.
    // 선언과 동시에 초기화해야함
    public static final int MAX_NUM = 100;

    // 인터페이스는 생성자를 가질 수 없음
//    public InterProduct() {};

    // 일반메소드를 가질 수 없음
//    public InterProduct() {};

    // 접근제어자는 public으로 고정, 키워드 abstract 고정 -> 따라서 둘 다 생략 가능
    public abstract  void nonStaticMethod();

    void abstMethod();

    /* ======== 잘 사용하지 않아서 참고용 */
    static void staticMethod() {
        System.out.println("Interface는 Static 메소드를 가질 수 있음");
    }

    default void defaultMethod() {
        System.out.println("Interface는 default 메소드를 가질 수 있음");
    }

}
