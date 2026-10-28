package exercise.hard;

import java.util.ArrayList;

public class Library {
    private ArrayList<Book> books = new ArrayList<>();

    // 같은 ISBN이 이미 있으면 추가하지 않고 false 반환
    public boolean addBook(Book book) {
        if (getBook(book.getIsbn()) != null) {
            return false;
        }
        books.add(book);
        return true;
    }

    // 없으면 null 반환
    public Book getBook(int isbn) {
        for (Book book : books) {
            if (book.getIsbn() == isbn) {
                return book;
            }
        }
        return null;
    }

    // 리스트 안의 실제 객체를 찾아서 필드를 직접 바꾼다
    public boolean updateBook(int isbn, String title, String author) {
        Book book = getBook(isbn);
        if (book == null) {
            return false;
        }
        book.setTitle(title);
        book.setAuthor(author);
        return true;
    }

    public boolean deleteBook(int isbn) {
        return books.removeIf(book -> book.getIsbn() == isbn);
    }

    public ArrayList<Book> getBooks() {
        return books;
    }
}
