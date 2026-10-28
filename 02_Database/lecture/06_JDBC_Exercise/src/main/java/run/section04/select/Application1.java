package run.section04.select;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

import static common.JDBCTemplate.getConnection;

public class Application1 {

    /*
     * 문제. JOIN 조회 결과를 DTO에 매핑하기
     *
     * 사용자에게 메뉴 번호를 입력받고, 해당 메뉴의 다음 정보를 조회하여 출력한다.
     *
     * - 메뉴 번호
     * - 메뉴 이름
     * - 메뉴 가격
     * - 카테고리 이름
     * - 주문 가능 여부
     *
     * 동일한 조회 기능을 다음 두 가지 방법으로 각각 구현한다.
     * 같은 쿼리문을 사용한다.
     *
     * 방법 1
     * Application1 클래스에 작성한다.
     * JOIN 조회 결과에 맞춘 평면 구조의 MenuDTO2를 사용한다.
     * 카테고리 정보 중 카테고리 이름만 MenuDTO2에 저장한다.
     *
     * 방법 2
     * Application2 클래스에 작성한다.
     * MenuDTO3 내부에 MenuCategory 객체를 포함하는 중첩 객체 구조를 사용한다.
     * 조회한 카테고리 코드, 카테고리 이름, 상위 카테고리 코드를
     * MenuCategory 객체에 저장한 뒤 MenuDTO3에 포함한다.
     *
     * 두 방법은 동일한 형식으로 조회 결과를 출력한다.
     * 조회되는 메뉴가 없는 경우 "조회 결과가 없습니다."를 출력한다.
     *
     * 구현이 끝난 후 다음 항목을 기준으로 두 방법의 장단점을 비교한다.
     *
     * 1. ResultSet 매핑의 편의성
     * 2. 필요한 데이터만 조회하는지 여부
     * 3. 객체 관계 표현의 명확성
     * 4. DTO의 재사용 가능성
     * 5. 유지보수 편의성
     */

    // App1. Join 전용 DTO를 만들어서 코드 실행
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        // 메뉴 전체 출력하기

        Connection con = getConnection();


        String squery = "select * from tbl_menu where menu_code = ?";

        try {
            // 4. Connection 객체를 이용해서 쿼리문에 해당하는 내용의 PreStatement 객체와 연결하기
            pstmt = con.prepareStatement(query);

            pstmt.setString(1,menuName);
            pstmt.setInt(2,menuPrice);
            pstmt.setInt(3, menuCode);

            // 5. 쿼리문 실행한걸 ResultSet에 담기
            updatedRows = pstmt.executeUpdate();
            System.out.println("updatedRows = " + updatedRows);

            if (updatedRows > 0) {
                PreparedStatement selPstmt = con.prepareStatement(squery);
                selPstmt.setInt(1, menuCode);

                ResultSet rset = selPstmt.executeQuery();
                if(rset.next()) {
                    System.out.println("rset.getInt(\"menu_code\") = " + rset.getInt("menu_code"));
                    System.out.println("rset.getString(\"menuName\") = " + rset.getString("menu_Name"));
                    System.out.println("rset.getInt(\"menu_price\") = " + rset.getInt("menu_price"));
                } else {
                    System.out.println("해당 메뉴를 찾을 수 없습니다.");
                }
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }


//    select
//    m.menu_code,
//    m.menu_name,
//    m.menu_price,
//    m.orderable_status,
//    c.category_code,
//    c.category_name,
//    c.ref_category_code
//    from tbl_menu m
//    join tbl_category c
//    on m.category_code = c.category_code
//    where m.menu_code = ?
}
