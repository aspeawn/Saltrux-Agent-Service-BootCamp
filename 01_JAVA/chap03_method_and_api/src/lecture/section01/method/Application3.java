package lecture.section01.method;

public class Application3 {
    /*
    * 매개변수(parameter) & 전달인자(argument)
    *
    * 변수 - 선언 위치에 따라
    * 1. 클래스변수
    * 2. 인스턴스변수
    * 3. 매개변수
    * 4. 지역변수
    * */

    public static void main(String[] args) {
        Application3 app3 = new Application3();

        int num = 20;

        // 메소드에 매개변수가 있을 때에는 인자를 넣어주어야함.
        // 인자의 개수는 매개변수의 개수와 같아야함.
        app3.printAge(23);
        // System.out.println(age); 매개변수는 지역변수이기에 해당 메소드 밖에서는 사용 불가능

        app3.printUserInfo("김영욱",  20, '남'); // 순서에 따라 인자 넣기
        System.out.println("메인메소드 종료");
    }

    // 나이를 입력받으면 나이를 출력해주는 메소드
    // 매개변수는 메소드 안에서만 사용 가능함
    public void printAge(/*매개변수*/ int age) {
        System.out.println("나이는 " + age + "입니다.");

        // 반환형이 void 일 때는 return을 작성하지 않아도 compiler가 생성해줌
    }

    /*
    * 사용자의 이름, 나이, 성별을 받아서 출력하는 메소드
    * 메소드명은 자유
    * 이름 문자열(String)
    * 나이는 정수형 (Int)
    * 성별은 문자(char) ('남', '여')
    * */

    public void printUserInfo(String name, int age, char gender) {

        System.out.println("name = " + name);
        System.out.println("age = " + age);
        System.out.println("gender = " + gender);
    }


}
