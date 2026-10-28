package lectrue.section2.run.c_preparedStatemnet;

import lectrue.section2.model.MenuDTO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static lectrue.section2.common.JDBCTemplate.getConnection;

public class Application2 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        // 최대 최소 메뉴가 가격 범위에서 판매여부에 따라 메뉴를 조회
        System.out.println("최소 메뉴 가격을 입력하세요 : ");
        int minPrice = Integer.parseInt(sc.nextLine());     // 1000
        System.out.println("최대 메뉴 가격을 입력하세요 : ");
        int maxPrice = Integer.parseInt(sc.nextLine());     // 3000
        System.out.println("판매 여부를 입력하세요(Y/N) : ");
        String orderableStatus = sc.nextLine();             // Y

        // ? : 위치홀더
        String query = "select * from tbl_menu where menu_price between ? and ? and orderable_status = ?";

        // 결과를 저장할 MenuDTO List
        List<MenuDTO> menuList = new ArrayList<>();
        try (
                Connection con = getConnection(); // 1. 커넥션 만들기
                PreparedStatement pstmt = con.prepareStatement(query);  // 2. PreparesStatement 객체 만들기
                ResultSet rest = null;  // 3. 결과 받을 준비
        ) {

            // SQL에 ? 값을 순서대로 추가
            // ? 위치홀더의 인덱스는 1부터 시작함
            pstmt.setInt(1, minPrice);  // pstmt 완성
            pstmt.setInt(2, maxPrice);
            pstmt.setString(3, orderableStatus);

            ResultSet rset = pstmt.executeQuery();  // 쿼리 실행

            while (rset.next()) {
                menuList.add(new MenuDTO(
                        rset.getInt("menu_code"),
                        rset.getString("menu_name"),
                        rset.getInt("menu_price"),
                        rset.getInt("category_code"),
                        rset.getString("orderable_status"))
                );
                System.out.println("menuList = " + menuList);
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }


    }
}
