package lectrue.section2.run.a_statement;

import lectrue.section2.common.JDBCTemplate;
import lectrue.section2.model.MenuDTO;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

public class Application2 {
    public static void main(String[] args) {
        MenuDTO menuDTO = null;
//        MenuDTO menuDTO = new MenuDTO();
//        MenuDTO menuDTO2 = new MenuDTO(1, "BEAR", 5000, 1, "Y");
//        menuDTO.getName();
//        menuDTO.setCategoryCode(3);
//        System.out.println("menuDTO = " + menuDTO);


        Connection con = JDBCTemplate.getConnection();      // 1. 커넥션 생성

        // Statement : 완성된 SQL 문자열을 실행
        Statement stmt = null;                              // 2. Statement 생성 (쿼리 실행용)

        // ResultsSet : SQL의 결과를 행단위로 읽음
        ResultSet rset = null;                              // 3. ResultSet 생성 (쿼리 받을용)
        Scanner sc = new Scanner(System.in);
        System.out.print("조회할 메뉴 코드를 입력하세요 : "); // 5
        String menuCode = sc.nextLine();


        try {
            stmt = con.createStatement();

            // 4. 쿼리문 작성
            String sql = "select * from tbl_menu where menu_code = '" + menuCode + "'";

            // 5. 쿼리 실행 (Statement) -> 결과는 ResultSet으로
            rset = stmt.executeQuery(sql);      // sql을 실행시킨 결과물을 ResultSet에 담기


            // 6. 실행결과를 꺼내서 가공
            while (rset.next()) {   // 다음 값이 있나?
                menuDTO = new MenuDTO(
                        rset.getInt("menu_code"),
                        rset.getString("menu_name"),
                        rset.getInt("menu_price"),
                        rset.getInt("category_code"),
                        rset.getString("orderable_status")

                );
            }
            System.out.println("menuDTO = " + menuDTO);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
