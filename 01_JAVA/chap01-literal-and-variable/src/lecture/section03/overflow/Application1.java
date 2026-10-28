package lecture.section03.overflow;

public class Application1 {

    public static void main(String[] args) {
        // 자료형마다 표현할 수 있는 범위가 잇는데 이 범위를 넘어설 경우

        byte num1 = 127;

        System.out.println("원본 : " + num1);

        // Overflow 발생 예제 (byte -> 2^7 = 128 -> -128~127
        System.out.println("증가 전 : " + num1);
        num1++;
        System.out.println("증가 후 : " + num1); // -128

        int inum = 1000000;
        long lnum = 700000;

        System.out.println(inum*lnum);

        // 자바의 정수형 타입 기본은 int
        long longMulti = inum * lnum; // lnum이 int이면 오버플로우 발생해서 -로 계산됨
        System.out.println(longMulti);
    }
}
