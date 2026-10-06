package lecture.section00.review;

// 클래스
// 객체를 만들기 위한 설계도 (참조자료형)
// 필드, 생성자, 메소드
// 클래스의 이름은 파일명과 같아야한다.
public class Person {
    /*
    접근 제어자 - 클래스의 멤버(필드, 메소드)에 접근할 수 있는 범위를 설정
    public : 모든 패키지에서 접근이 가능
    protected : 같은 패키지 또는 상속 관계의 클래스에서 접근 가능
    default : 같은 패키지 안에서만 접근 가능
    private : 현재 클래스 안에서만 접근 가능
    * 필드 - 객체가 가지는 값
    * */
    private String name;
    private int age;

    // 하나의 같은 클래스 파일에서 매개변수 타입이 다른 생성자가 있음
    // -> 메소드 오버로딩

    // 기본 생성자
    // 객체를 만들 때 호출되는 특별한 메소드
    // 메소드 명이 클래스명 과 일치
    public Person() {
    }

    // 매개변수가 있는 생성자
    public Person(String name, int age) {
        // this 키워드 : 현재 만들어진 객체(인스턴스) 자기 자신을 가르킴
        this.name = name;
        this.age = age;
    }

    // 메소드
    // 객체가 할 수 있는 행동을 코드로 작성한 것
    public void introduce() {
        System.out.println("안녕하세요 저는 " + name + "이고, " + age + "살입니다.");
    }

    // Getter : 데이터를 읽는 용도
    public String getName() {
        return name;
    }

    // Setter : 데이터를 수정 용도
    public void setName(String name) {
        this.name = name;

        // 전처리 가능
    }
}
