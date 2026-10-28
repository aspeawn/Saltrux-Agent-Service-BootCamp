package lecture.section04.calendar;

import java.time.*;
import java.time.format.DateTimeFormatter;

public class Application2 {
    public static void main(String[] args) {
        /*
        * LocalDate :날짜
        * LocalTime : 시간
        * LocalDateTime : 날짜와 시간
        * ZonedDateTime : 날짜, 시간, 시간대
        * */

        LocalDate date = LocalDate.of(2026,10,7);
        LocalTime time = LocalTime.of(18,30,10);
        LocalDateTime datetime = LocalDateTime.of(date, time);
        ZonedDateTime seoulTime = datetime.atZone(ZoneId.of("Asia/Seoul"));

        System.out.println("date = " + date);
        System.out.println("time = " + time);
        System.out.println("dateTime = " + datetime);
        System.out.println("seoulTIme = " + seoulTime);
        System.out.println("LocalDateTime.now() = " + LocalDateTime.now());

        LocalDateTime now = LocalDateTime.now();    // 현재시간 변수에 저장
        System.out.println("년 = " + now.getYear());
        System.out.println("월 = " + now.getMonth());
        System.out.println("일 = " + now.getDayOfMonth());
        System.out.println("요일 = " + now.getDayOfWeek());

        // 포멧팅
        // yyyy/MM/dd  ex) 2026/10/07
        String today = "2026/10/07";
        DateTimeFormatter input = DateTimeFormatter.ofPattern("yyyy/MM/dd");

        // 다른형식으로 저장된 날짜를 LocalDate타입으로 변환 가능
        LocalDate customDate = LocalDate.parse(today, input);

        System.out.println("customDate = " + customDate);

        // Output (출력을 내맘대로)
        DateTimeFormatter output = DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH:mm");
        LocalDateTime outputExample = LocalDateTime.now();  // 현재시간
        System.out.println("outputExample = " + outputExample);

        String formatted = outputExample.format(output);
        System.out.println("formatted = " + formatted);

    }

}
