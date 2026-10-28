package lecture.section01.method;

public class Application5 {
    public static void main(String[] args) {
        Application5 app5 = new Application5();

        int result = app5.add(10, 5);
        System.out.println("result = " + result);

        result = app5.sub(10, 5);
        System.out.println("result = " + result);

        result = app5.multiple(10, 5);
        System.out.println("result = " + result);

        result = app5.divine(10, 5);
        System.out.println("result = " + result);
    }

    // 두 수를 받아 더하는 메소드
    public int add(int x, int y) {
        return x+y;
    }

    // 두 수를 받아 빼는 메소드
    public int sub(int x, int y){
        return x-y;
    }

    // 두 수를 받아 곱하는 메소드
    public int multiple(int x, int y){
        return x*y;
    }

    // 두 수를 받아 나누는(몫) 메소드
    public int divine(int x, int y) {
        return x/y;
    }

}