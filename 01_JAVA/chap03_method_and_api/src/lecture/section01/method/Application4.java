package lecture.section01.method;

public class Application4 {
    /*
    * 메소드의 return(반환)
    * return : 현재 메소드를 종료하고 호출한 구문으로 돌아가라는 명령
    * */
    public static void main(String[] args) {
        Application4 app4 = new Application4();
//        app4.testMethod();

        String str = app4.sayHello(); // 값만 가져옴
        System.out.println("str = " + str);
    }

    public void testMethod(){
        System.out.println("테스트 동작 확인 1");

        return;

        // 예외 발생, return은 메소드의 가장 마지막에 작성해야함
//        System.out.println("테스트 동작 확인 2");
    }

    // 문자열을 반환
    // 접근제어자 뒤에 반환할 타입을 명시해야함
    // 아무것도 반환하지 않을 때는 void
    public String sayHello() {
        String hello = "hello world";

        return hello;
    }
}
