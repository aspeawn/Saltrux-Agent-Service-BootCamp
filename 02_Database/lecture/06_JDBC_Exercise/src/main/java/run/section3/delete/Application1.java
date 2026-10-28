package run.section3.delete;

import java.sql.*;
import java.util.Scanner;

import static common.JDBCTemplate.getConnection;

public class Application1 {

    /*
    * 전체 메뉴를 보여주고,
    * 삭제할 메뉴의 번호를 입력 받음
    * 해당 번호 삭제하기
    * */

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 메뉴 전체 출력하기

        Connection con = getConnection();
        String squery = "select menu_name, menu_price, menu_code from tbl_menu";
        PreparedStatement pstmt = null;

        try {
            // pstmt 객체에 쿼리문을 연결 -> con.메소드로 쿼리문 연결
            pstmt = con.prepareStatement(squery);

            // 쿼리문에 담았으면 실행을 해야함 -> 이후에 ResultSet에 담아서 출력
            ResultSet rset = pstmt.executeQuery();

            boolean hasMenu = false;
            while (rset.next()) {
                hasMenu = true;
                System.out.println("메뉴명 :  " + rset.getString("menu_Name") + "\t가격 :   "
                        + rset.getInt("menu_price")
                        + "\t메뉴 코드 : " + rset.getInt("menu_code"));
            } if(!hasMenu) {
                System.out.println("저장된 메뉴가 없습니다");
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        // 해당 번호의 메뉴 삭제하기

        System.out.print("삭제할 메뉴의 번호를 입력하세요 : ");
        int menuCode = sc.nextInt(); sc.nextLine();

        String dquery = "delete from tbl_menu where menu_code = ?";
//        String squery2 = "select * from tbl_menu where menu_code = ?";
        int updatedRows;
        try {
            // pstmt 객체에 쿼리문을 연결 -> con.메소드로 쿼리문 연결
            pstmt = con.prepareStatement(dquery);

            // ? 워치 홀더 내용 구현
            pstmt.setInt(1,menuCode);


            // 쿼리문 실행 - UPDATE, DELETE, INSERT는 executeUpdate()
            updatedRows = pstmt.executeUpdate();
            System.out.println("updatedRows = " + updatedRows);

            PreparedStatement pstmt2 = con.prepareStatement(squery);
            ResultSet rset = pstmt2.executeQuery();

            if (updatedRows > 0) {
                boolean hasMenu = false;
                while (rset.next()) {
                    hasMenu = true;
                    System.out.println("메뉴명 :  " + rset.getString("menu_Name") + "\t가격 :   "
                            + rset.getInt("menu_price")
                            + "\t메뉴 코드 : " + rset.getInt("menu_code"));
                } if(!hasMenu) {
                    System.out.println("저장된 메뉴가 없습니다");
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }

}
