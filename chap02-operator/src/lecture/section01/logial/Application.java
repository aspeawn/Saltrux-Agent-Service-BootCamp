package lecture.section01.logial;

public class Application {
    public static void main(String[] args) {
        /*
        * 논리 연산자
        * -> 논리 값을 다루는 연산자 (true or false)
        *
        * 논리 연산자 종류
        * && : 두 조건 모두 true (and)
        * || : 두 조건중 하나라도 true이면 true (or)
        * ! : 논리값을 반대로 변경 (not 연산)
        * */

        System.out.println("true와 true의 논리 and 연산 : " + (true && true));  // true
        System.out.println("true와 false의 논리 adn 연산 : " + (true && false)); // false

        System.out.println("true와 true의 논리 and 연산 : " + (true || true));  // true
        System.out.println("true와 false의 논리 adn 연산 : " + (true || false)); // true

        System.out.println("========================================");
        // 성인이면서 티켓이 있는가?
        int age = 20;
        boolean hasTicket = true;

        boolean result = age >= 20 && hasTicket;
        System.out.println("성인이면서 티켓이 있는가? : " + result);

        System.out.println("========================================");

        // 평균 80점이상, 출석률이 90% 이상이고 징계 이력이 없어야 장학금 대상이다.
        // 아래의 조건의 학생은 장학금 대상인가?
        int averageScore = 88;
        int attendanceRate = 95;
        boolean hasRecord = false;

        boolean result2 = averageScore>80 && attendanceRate>90 && !(hasRecord);

        System.out.println("아래 조건의 학생은 장학금 대상인가? : " + result2);
    }
}
