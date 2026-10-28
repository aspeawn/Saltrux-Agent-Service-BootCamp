package lecture.section01.enumtype;

public class Application {
    public static void main(String[] args) {

        Subjects subject1 = Subjects.JAVA;
        Subjects subject2 = Subjects.HTML;
        Subjects subject3 = Subjects.JAVA;
//        Subjects subject2 = "다른 자료형은 넣을 수 없음" -> enum에서 정의한 상수만 가능

        if (subject1 == (subject2)) {
            System.out.println("두 과목은 같은 과목입니다.");
        } else {
            System.out.println("두 과목은 다른 과목입니다.");
        }

        System.out.println("subject1 == subject3 : " + (subject1 == subject3));

        // switch문에 enum 사용 가능
        // 상수 이름만 작성해도 가능
        switch (subject2) {
            case JAVA:
            case MYSQL:
            case JDBC:
                System.out.println("백엔드입니다.");
                break;
            case HTML:
            case CSS:
            case JAVASCRIPT:
                System.out.println("프론트엔드입니다.");
        }
    }

    // Enum Type을 이용하면 컴파일 단계에서 잘못된 값을 막을 수 있음
    public static void printSubject(Subjects subjects) {
        System.out.println("선택한 과목 : " + subjects.name());
    }
}
