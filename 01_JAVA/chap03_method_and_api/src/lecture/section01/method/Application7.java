package lecture.section01.method;

public class Application7 {
    public static void main(String[] args) {

        /*
        * 다른 클래스에 작성된 static 메소드는
        * 호출할 때 클래스명을 함께 작성해야함
        * */
        int result = Application6.sum(5, 6);
        System.out.println("result = " + result);

        Application6 app6 = new Application6();
        int result2 = app6.sub(6, 5);
        System.out.println("result2 = " + result2);
    }
}
