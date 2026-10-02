package lecture.section04.constructor;

public class Application {
    public static void main(String[] args) {
        // 인스턴스 생성
        // 클래스명 변수 = new 생성자();
        User user = new User(); // 기본 생성자가 없어서

        /*
        * User 클래스로 인스턴스스턴스를 만들 때
        * 원하는 필드들을 넣어야지만 인스턴스를 만들 수 있게 강제할 수 있음
        * */
        User user2 = new User("horo01", "pass01","홍길동");

        System.out.println(user2);

        // 기본생성자
        User test1 = new User();

        // 매개변수 한개만가진(id) 생성자
        User test2 = new User("아이디");

        // 매개변수 두개만가진(id) 생성자
        User test3 = new User("아이디", "비밀번호");

        // 매개변수 한개만가진(id) 생성자
        User test4 = new User("아이디", "비밀번호", "이름");
    }
}
