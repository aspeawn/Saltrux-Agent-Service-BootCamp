package lecture.section01.object.run;

import lecture.section01.object.book.Book;

public class Application2 {

    public static void main(String[] args) {

        /*
        * equals
        * - 객체가 정의한 기준으로 값이 같은지 비교함 (동등성)
        *
        * ==
        * - 두 변수가 같은 객체를 참조하는지 비교함 (동일성)
        * */


        // stack 영역에 book1, book2, book3
        // heap 영역에 book1 객체 생성 + 메모리 주소값 / book2 객체 생성 + 메모리 주소값

        // 얕은복사로 stack에서 book3는 book1과 같은 주소값을 가리킴

        Book book1 = new Book(1, "홍길동전", "허균", 50000);
        Book book2 = new Book(1, "홍길동전", "허균", 50000);
        Book book3 = book1; // 얕은 복사


        System.out.println("book1.equals(book2) : " +(book1.equals(book2)));
        System.out.println("book1 == book2 : " + (book1==book2));
        System.out.println("book1 == book3 : " + (book1==book3));
    }
}
