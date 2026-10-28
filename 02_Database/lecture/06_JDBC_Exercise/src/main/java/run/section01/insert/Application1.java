package run.section01.insert;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.*;
import java.util.Properties;

import static common.JDBCTemplate.close;
import static common.JDBCTemplate.getConnection;

public class Application1 {
    public static void main(String[] args) {
        Connection con = getConnection();
        PreparedStatement pstmt = null;

//        System.out.println("con = " + con);

        Properties prop = new Properties();

        // 결과
        int result;

        try {
            // Query문 작성된 XML 읽기
            prop.loadFromXML(new FileInputStream("src/main/java/mapper/menu-query.xml"));
//            System.out.println("prop = " + prop);

            // 키 값으로 쿼리 꺼내기
            String query = prop.getProperty("insertMenu");

            // Connection 객체와 PreparedStatement는 예외처리를 안해도 되지만
            // con 객체와 메소드로 prepareStatement(쿼리문)은 SQL Exeception 처리가 필요함
            pstmt = con.prepareStatement(query);

            pstmt.setString(1,"봉골래청국장");
            pstmt.setInt(2,50000);
            pstmt.setInt(3,1);
            pstmt.setString(4,"Y");

            /*
            * executeQuery() : Select 문에 사용 / 결과를 ResultSet으로 반환
            * executeUpdate() : INSERT,UPDATE,DELETE 문에 사용 / 쿼리에 영향받은 **행의 수**를 반환
            * */
//            pstmt.executeQuery();       // 쿼리문 실행
            result = pstmt.executeUpdate();       // 쿼리문 실행


        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }finally {
            close(pstmt);
            close(con);
        }
        System.out.println(result);
    }
}
