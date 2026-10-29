package bear.section01.subsection02.setter;

import bear.section01.common.BookDAO;
import bear.section01.common.BookDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("bookServiceSetter")
public class BookService {

    // final 키워드 사용 못함
    // setter를 이용해 의존 객체를 교체 가능하다.
    private BookDAO bookDAO;

    // Spring이 BookService 빈을 생성한 뒤, BookDao 타입의 빈을 인자로 전달해
    // stter를 호출한다.
    @Autowired
    public void setBookDAO(BookDAO bookDAO) {
        this.bookDAO = bookDAO;
    }

    // 도서 목록 조회
    public List<BookDTO> selectAllBooks() {
        return bookDAO.selectBookList();
    }

    // sequence로 도서 조회
    public BookDTO searchBookBySequence(int sequence) {
        return bookDAO.selectOneBook(sequence);
    }

    @Override
    public String toString() {
        return "BookService{" +
                "bookDAO=" + bookDAO +
                '}';
    }
}
