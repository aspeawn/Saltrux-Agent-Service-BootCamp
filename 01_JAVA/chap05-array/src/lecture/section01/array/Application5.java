package lecture.section01.array;

public class Application5 {
    public static void main(String[] args) {

        // 다차원 배열 : 2차원 이상의 배열을 의미
        int[][] iarr;       // stack 영역에 선언만

        iarr = new int[5][5];   // heap 영역에 선언

        iarr[0] = new int[5];
        iarr[1] = new int[5];
        iarr[2] = new int[5];

        int[][] iarr2 = new int[3][5];

        System.out.println(iarr2[0][4]);
    }
}
