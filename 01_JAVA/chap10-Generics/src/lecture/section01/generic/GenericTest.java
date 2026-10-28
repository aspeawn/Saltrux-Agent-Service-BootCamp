package lecture.section01.generic;

// 메소드명(매개변수) -> 제네릭클래스<타입>
// 제네릭설정은 클래스명 옆에 다이아몬드 연산자(꺽쇠)
// 연산자 내부에 작성하는 영문자는 대문자(관례)
// T : Type, E : Element, K : key, V : Value, N : Name
public class GenericTest<T> {
    private T value;

    public GenericTest(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}
