package src.exercise.hard.Question1;

public class class_object {
    public static void main(String[] args) {
        Book book = new Book("자바의 정석", "남궁성", 30000);
        System.out.println("제목 : " + book.getTitle());
        System.out.println("저자 : " + book.getAuthor());
        System.out.println("가격 : " + book.getPirce());
    }


}
