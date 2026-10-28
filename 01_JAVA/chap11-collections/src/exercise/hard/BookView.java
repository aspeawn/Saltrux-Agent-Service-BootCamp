package exercise.hard;

import java.util.ArrayList;

public class BookView {
    public void displayBook(Book book) {
        System.out.println("제목: " + book.getTitle()
                + " | 저자: " + book.getAuthor()
                + " | ISBN: " + book.getIsbn()
                + " | 해외서적: " + (book.isForeignBook() ? "O" : "X"));
    }

    public void displayBookList(ArrayList<Book> books) {
        if (books.isEmpty()) {
            displayMessage("등록된 도서가 없습니다.");
            return;
        }
        for (Book b : books) displayBook(b);
    }

    public void displayMessage(String message) {
        System.out.println(message);
    }
}
