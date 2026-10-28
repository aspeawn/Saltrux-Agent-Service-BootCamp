package lecture.section00.review;

public class Application {
    // Static 정적
    // JVM에 클래스로드가 일어날 때 static 영역은 객체가 없어도 실행 가능

    public static void main(String[] args) {
//        Person person = new Person();   // 기본 생성자 호출 -> 다른 생성자가 없을 때 컴파일러가 자동생성
        Person person = new Person("태근", 20);
        // heap에서 메모리 주소값(0x123)을 가지고 name="태근", age=20, introduce()를 가지는 객체가 생성됨
        // stack에서는 person이라는 설계도에 (Person 타입의 변수명 person) 0x123 메모리 주소값이 저장됨
        Person person2 = new Person();
        person.introduce();
        person2.introduce();

        System.out.println(person.getName());

        Application app = new Application();

        // 클래스명.정적메소드명()
        app.testMethod1();

        // 상속
        person.toString();
    }

    public String testMethod1() {
        return "일반 메소드입니다.";
    }
}
