package lecture.section02.string;

import java.util.Locale;

public class Application1 {
    public static void main(String[] args) {

        // String에서 자주쓰는 메소드
        String text = "  JAVA Programing  ";

        String[] strArr = new String[] {"안녕"};

        int length = strArr.length;

        // 조회
        System.out.println("길이 : " + text.length());
        System.out.println("첫 글자 : " + text.charAt(3));

        // 검색 -> 해당 문자를 포함하고 있는가?
        System.out.println("JAVA 포함 : "  + text.contains("JAVA"));
        System.out.println("JAVA 시작 위치 : " + text.indexOf("JAVA"));

        // 변환
        String trimmed = text.strip();
        System.out.println("공백 제거 : #" + trimmed + "#");
        System.out.println("부분 문자열 : " + trimmed.substring(1,7));
        System.out.println("문자열 교체 : " + trimmed.replace("JAVA", "Kotlin"));
        System.out.println("대/소문자 변환 : " + trimmed.toLowerCase()); // <-> toUpperCase


    }
}
