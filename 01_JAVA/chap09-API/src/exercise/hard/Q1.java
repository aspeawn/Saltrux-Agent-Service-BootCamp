package exercise.hard;

import java.util.Calendar;

public class Q1 {
    public static void main(String[] args) {

        Calendar cal = Calendar.getInstance();

        cal.set(2023, 7,1);
        int dayOfWeek = cal.get(Calendar.DAY_OF_WEEK);
        int month = Calendar.JULY + 1;
        String[] days = {"일요일", "월요일", "화요일", "수요일",
                "목요일", "금요일", "토요일"};


        System.out.println("년 : " + cal.get(Calendar.YEAR));
        System.out.println("월 : " + month);
        System.out.println("일 : " + cal.get(Calendar.DAY_OF_MONTH));
        System.out.println("요일: " + days[dayOfWeek-1]);
    }
}
