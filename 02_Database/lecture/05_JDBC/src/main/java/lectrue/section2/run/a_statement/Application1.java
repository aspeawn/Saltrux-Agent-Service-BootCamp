package lectrue.section2.run.a_statement;

import lectrue.section2.common.JDBCTemplate;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Application1 {
    public static void main(String[] args) {

        Connection con = JDBCTemplate.getConnection();

        // Statement : 완성된 SQL 문자열을 실행
        Statement stmt = null;

        // ResultsSet : SQL의 결과를 행단위로 읽음
        ResultSet rset = null;

        try {
            stmt = con.createStatement();

            String sql = "select menu_code, menu_name from tbl_menu";
            rset = stmt.executeQuery(sql);      // sql을 실행시킨 결과물을 ResultSet에 담기

            while (rset.next()) {   // 다음 값이 있나?

                System.out.print(rset.getInt("menu_code")+"\t");       // getInt : 정수형 데이터
                System.out.println(rset.getString("menu_name"));    // getString : 문자열 데이터
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
