package exercise.hard;
import java.util.*;


public class Application1 {

    public static void main(String[] args) {

        BookController controller = new BookController();

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("도서 관리 프로그램");
            System.out.println("1. 도서 추가");
            System.out.println("2. 도서 조회");
            System.out.println("3. 도서 수정");
            System.out.println("4. 도서 삭제");
            System.out.println("9. 종료");
            System.out.print("메뉴를 선택하세요: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    System.out.print("제목: ");
                    String title = scanner.nextLine();
                    System.out.print("저자: ");
                    String author = scanner.nextLine();
                    System.out.print("ISBN: ");
                    int isbn = scanner.nextInt();
                    System.out.print("해외 서적 여부(true/false): ");
                    boolean isForeignBook = scanner.nextBoolean();
                    controller.addBook(title, author, isbn, isForeignBook);
                    break;
                case 2:
                    System.out.print("조회할 도서의 ISBN: ");
                    isbn = scanner.nextInt();
                    controller.getBook(isbn);
                    break;
                case 3:
                    System.out.print("수정할 도서의 ISBN: ");
                    isbn = scanner.nextInt();
                    scanner.nextLine(); // Consume newline
                    System.out.print("새로운 제목: ");
                    title = scanner.nextLine();
                    System.out.print("새로운 저자: ");
                    author = scanner.nextLine();
                    controller.updateBook(isbn, title, author);
                    break;
                case 4:
                    System.out.print("삭제할 도서의 ISBN: ");
                    isbn = scanner.nextInt();
                    controller.deleteBook(isbn);
                    break;
                case 9:
                    System.out.println("프로그램을 종료합니다.");
                    scanner.close();
                    return;
                default:
                    System.out.println("잘못된 입력입니다.");
            }
        }
    }

}