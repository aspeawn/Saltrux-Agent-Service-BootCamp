package lecture.section01.method;

public class Application6 {

    // static : 객체를 따로 만들지 않아도 메소드 자체를 사용할 수 있음
    public static void main(String[] args) {

        // static 메소드를 호출하는 방법
        // 클래스명.메소드명()
        System.out.println(Application6.sum(5, 6));

        // 동일한 클래스 내에 작성된 static 메소드는 클래스명 생략이 가능
        System.out.println(sum(5, 6));
        System.out.println();
    }

    public static int sum(int x, int y) {

        return x+y;
    }

    public int sub(int x, int y){
        return x-y;
    }

}
