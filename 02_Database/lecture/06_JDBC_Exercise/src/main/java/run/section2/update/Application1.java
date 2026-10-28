package run.section2.update;

import model.dto.MenuDTO;

import java.sql.*;
import java.util.Properties;
import java.util.Scanner;

import static common.JDBCTemplate.getConnection;

public class Application1 {
    /*
    1. 메뉴 변경하기
    * 변경할 메뉴 번호를 입력받고
    * 해당 메뉴의 변경사항을 입력받음
    * (메뉴이름, 메뉴 가격)
    *

    2. 변경 메뉴 번호를 입력하면 현재 메뉴 정보가 보이고 메뉴의 변경사항을 입력 받음
    */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("메뉴 코드를 입력하세요 : ");
        int menuCode = sc.nextInt(); sc.nextLine();

        System.out.print("메뉴의 이름을 입력해주세요 : ");
        String menuName = sc.nextLine();

        System.out.print("메뉴 가격을 입력하세요 : ");
        int menuPrice = sc.nextInt();

        MenuDTO newMenu = new MenuDTO();
        newMenu.setName(menuName);
        newMenu.setPrice(menuPrice);

        int updatedRows;

        // 1. Con 객체 만들기
        Connection con = getConnection();
        // 2. PreStatement 객체 만들기
        PreparedStatement pstmt = null;

        // 3. 쿼리문 만들고 쿼리문 실행하기
        String query = "update tbl_menu set menu_name = ?, menu_price = ? where menu_code = ?";
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



        // 5. 출력하기
    }



}
