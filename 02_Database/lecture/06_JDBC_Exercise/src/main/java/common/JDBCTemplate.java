package common;

import java.io.FileReader;
import java.io.IOException;
import java.sql.*;
import java.util.Properties;

// DB 연결 생성과 JDBC 자원 반납을 처리하는 클래스
public class JDBCTemplate {
    public static Connection getConnection() {

        /*
        * Connection 객체를 외부 설정 파일을 이용해서 만들기
        * - 보안적인 장점
        *   - 소스코드에 db 접속 정보가 공개되어 누구든 접속 할 수 있는 상황을 방지함
        * - 빌드적인 장점
        *   - 추후 DB 접속 정보가 변경되면 소스코드 변경필요없이 properties만 수정하면 됨
        * */

        // Connection 만들기
        // Connection : DB 접속을 위한 연결 객체 (Statement 생성하기 위해)
        Connection con = null;
        Properties prop = new Properties();

        try {
            // 외부 설정 파일 읽어오기
            prop.load(new FileReader("src/main/java/config/db.properties"));
            System.out.println("설정 파일을 읽어왔습니다 ...");

            // properties 에 있는 값들 꺼내기
            String driver = prop.getProperty("driver");
            String url = prop.getProperty("url");
            String user = prop.getProperty("user");
            String password = prop.getProperty("password");

            // 드라이버 등록
            Class.forName("com.mysql.cj.jdbc.Driver");

            con = DriverManager.getConnection(
                    url,
                    prop
            );
            System.out.println("커넥션 설정이 완료되었습니다.");

        } catch (ClassNotFoundException | SQLException | IOException e) {
            e.printStackTrace();
        }

        return con;
    }

    // 커넥션 닫기
    // 각 Connection Statement, ResultSet을 컨트롤 클릭하면 내부 인터페이스에서 AutoCloseable이 들어있어 자동으로 닫힘
    public static void close(Connection con) {

        try {
            if (con != null && !con.isClosed()) {
                con.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public static void close(Statement stmt) {

        try {
            if (stmt != null && !stmt.isClosed()) {
                stmt.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public static void close(ResultSet rset) {

        try {
            if (rset != null && !rset.isClosed()) {
                rset.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}
