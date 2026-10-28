package lectrue.section2.run.c_preparedStatemnet;

import lectrue.section2.model.MenuDTO;

import java.sql.*;

import static lectrue.section2.common.JDBCTemplate.getConnection;

public class Application1 {
    public static void main(String[] args) {

        // ? : 위치홀더
        String query = "select * from tbl_menu where menu_code = ?";
        try(
                Connection con = getConnection(); // 1. 커넥션 만들기
                PreparedStatement pstmt = con.prepareStatement(query);  // 2. PreparesStatement 객체 만들기
                ResultSet rest = null;  // 3. 결과 받을 준비
                ) {

            int menuCode = 1;   // 검색할 메뉴코드

            pstmt.setInt(1, menuCode);  // pstmt 완성

            ResultSet rset = pstmt.executeQuery();

            if(rset.next()) {
                MenuDTO menuDTO = new MenuDTO(
                        rset.getInt("menu_code"),
                        rset.getString("menu_name"),
                        rset.getInt("menu_price"),
                        rset.getInt("category_code"),
                        rset.getString("orderable_status")
                );
                System.out.println("menuDTO = " + menuDTO);
            }


        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
