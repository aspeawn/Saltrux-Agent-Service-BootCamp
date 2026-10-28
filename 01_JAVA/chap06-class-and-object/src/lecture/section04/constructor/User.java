package lecture.section04.constructor;

public class User {
    private String id;
    private String pwd;
    private String name;

    // 기본생성자
    /*
    * 1. 인스턴스를 생성 시점에 수행할 명령이 있을 때 사용
    * 2. 매개변수에 전달받은 값으로 인스턴스를 생성하고 싶을 때
    * */
    public User() {
        System.out.println("User의 기본생성자 호출함..");
    }

    // 매개변수가 있는 생성자 lombok(라이브러리)
    public User(String id, String pwd, String name) {
        this.id = id;
        this.pwd = pwd;
        this.name = name;
    }

    // Alt + Insert -> Constructor로 매개변수가 될 필드 선택하고 자동완성
    public User(String id) {
        this.id = id;
    }

    public User(String id, String pwd) {
        this.id = id;
        this.pwd = pwd;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", pwd='" + pwd + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
