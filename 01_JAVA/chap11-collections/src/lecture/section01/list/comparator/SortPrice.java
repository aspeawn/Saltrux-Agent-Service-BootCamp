package lecture.section01.list.comparator;

import lecture.section01.list.dto.BookDTO;

import java.awt.print.Book;
import java.util.Comparator;

public class SortPrice implements Comparator<BookDTO> {
    // sort() -> 내부적으로 사용하는 메소드
    // 인터페이스를 상속받아서 메소드 오버라이딩을 강제해놓음

    /*
    * compare의 반환값으로 정렬
    * - 1 : 오름차순을 위해 순서를 바꿔야하는 경우 1을 return
    * - 1 : 이미 오름차순일 경우 -1을 return
    * - 0 : 두 값이 같은 경우 0을 return
    * */
    @Override
    public int compare(BookDTO o1, BookDTO o2) {
        int result = 0;

        // 배열 오름차순이므로 오른쪽이 더 커야하는데, 바꿔야함 return 1
        if(o1.getPrice() > o2.getPrice()) {
            result = 1;
        } else if (o1.getPrice() < o2.getPrice()) {
            result = -1;
        } else {
            result = 0;
        }

        return result;
    }
}
