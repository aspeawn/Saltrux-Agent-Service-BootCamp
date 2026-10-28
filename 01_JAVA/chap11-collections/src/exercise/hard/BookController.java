package exercise.hard;

public class BookController {
    private Library library = new Library();
    private BookView view = new BookView();

    public void addBook(String title, String author, int isbn, boolean isForeignBook) {
        if (library.addBook(new Book(title, author, isbn, isForeignBook))) {
            view.displayMessage("도서 추가: \"" + title + "\" 추가");
        } else {
            view.displayMessage("이미 존재하는 ISBN입니다: " + isbn);
        }
    }

    public void getBook(int isbn) {
        Book book = library.getBook(isbn);
        if (book == null) {
            view.displayMessage("ISBN이 \"" + isbn + "\"인 도서를 찾을 수 없습니다.");
        } else {
            view.displayBook(book);
        }
    }

    public void updateBook(int isbn, String title, String author) {
        if (library.updateBook(isbn, title, author)) {
            view.displayMessage("ISBN이 \"" + isbn + "\"인 도서를 수정했습니다.");
            view.displayBook(library.getBook(isbn)); // 수정 결과 확인용
        } else {
            view.displayMessage("ISBN이 \"" + isbn + "\"인 도서를 찾을 수 없습니다.");
        }
    }

    public void deleteBook(int isbn) {
        if (library.deleteBook(isbn)) {
            view.displayMessage("ISBN이 \"" + isbn + "\"인 도서 삭제");
        } else {
            view.displayMessage("ISBN이 \"" + isbn + "\"인 도서를 찾을 수 없습니다.");
        }
    }

    public void displayAllBooks() {
        view.displayBookList(library.getBooks());
    }
}

