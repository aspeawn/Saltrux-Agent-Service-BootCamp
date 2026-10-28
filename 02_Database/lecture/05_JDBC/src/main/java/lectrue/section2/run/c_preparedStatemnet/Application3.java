package lectrue.section2.run.c_preparedStatemnet;

import lectrue.section2.model.MenuDTO;

import java.util.Scanner;
import java.sql.*;

import static lectrue.section2.common.JDBCTemplate.getConnection;

public class Application3 {
    public static void main(String[] args) {

        // 사용자에게 문자열을 입력받고
        Scanner sc = new Scanner(System.in);

        // 해당 문자열이 포함된 메뉴 목록 출력
        System.out.println("찾고싶은 문자열을 입력하세요 : ");
        String str = sc.nextLine();

        // ? : 위치홀더
        String query = " select * from tbl_menu where menu_name like concat('%', ?, '%') ";


        try {
            Connection con = getConnection();
            PreparedStatement pstmt = con.prepareStatement(query);     // pstmt 객체 생성
            ResultSet rset = null;

            pstmt.setString(1, str);

            // 쿼리 실행해서 ResultSet에 담기
            rset = pstmt.executeQuery();

            // .next() boolean 타입으로 true나 false를 반환함
            if (rset.next()) {
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
