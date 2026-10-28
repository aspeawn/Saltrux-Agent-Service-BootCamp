package lecture.section01.user_type;

import java.util.Arrays;

// 회원 클래스
public class Member {

    // 클래스 내의 변수 이름 : 필드 / 인스턴스변수 // 속성
    // id, pwd, name, age, gender, hobby
    String id;
    String pwd;
    String name;
    int age;
    char gender;
    String[] hobby;

    // 주소가 출력되는게 아니라 필드들을 나열해서 볼 수 있다.
    @Override
    public String toString() {
        return "Member{" +
                "id='" + id + '\'' +
                ", pwd='" + pwd + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", gender=" + gender +
                ", hobby=" + Arrays.toString(hobby) +
                '}';
    }
}
