package lecture.section01.array;

public class Application3 {
    public static void main(String[] args) {

        // 초기화 블록

        int[] iarr = {1, 4, 6, 7, 8};
        int[] iarr2 = new int[] {1, 4, 6, 7, 8};

        for (int i = 0; i < iarr.length; i++) {
            System.out.println("i = " + i + " : " + iarr[i]);
        }

    }
}
