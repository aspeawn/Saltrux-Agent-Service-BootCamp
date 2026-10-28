package lecture.section02.variable;

public class Appliaciton1 {
    public static void main(String[] args) {

        int salary = 500000;
        int bonus = 200000;

        System.out.println("[리터럴]보너스를 포함한 급여 : " + (1000000 + 200000));
        System.out.println("보너스를 포함한 급여 : " + (salary + bonus));
        System.out.println("보너스를 포함한 급여 : " + (salary + bonus));
        System.out.println("보너스를 포함한 급여 : " + (salary + bonus));
        System.out.println("보너스를 포함한 급여 : " + (salary + bonus));

        /*
        * 변수를 사용하는 방법
        * 1. 변수를 준비 (선언함)
        * 2. 변수에 값을 대입함 (초기화, 대입)
        * */

        // 선언 : 자료형 + 변수명
        // 정수형
        byte bnum;

        short snum;
        int inum;
        long lnum = 3_000_000_000L;  // int 범주를 넘는 정수 리터럴에는 L

        // 실수형 (기본형 double)
        float fnum = 4.0f;
        double dnum;

        char ch; // 문자형
        boolean isTrue; // 논리형

        // 문자열 (참조자료형)
        String str;
    }
}
