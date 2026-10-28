package lecture.section01.object.run;

import lecture.section01.object.book.Book;

public class Application1 {

    public static void main(String[] args) {

        // Object.toString() : "클래스명@16진수의 해시코드"
        // 객체의 상태를 쉽게 확인하려면 자식 클래스에서 오버라이딩(재정의)
        Object object = new Object();
        System.out.println(object.toString());

        Book book = new Book(1, "홍길동전", "허균", 50000);
        System.out.println(book.toString());
    }
}
