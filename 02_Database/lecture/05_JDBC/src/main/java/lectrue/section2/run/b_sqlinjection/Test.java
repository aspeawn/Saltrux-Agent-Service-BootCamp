package lectrue.section2.run.b_sqlinjection;

import lectrue.section2.common.JDBCTemplate;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class Test {
    public static void main(String[] args) {
        try {
            Connection con = JDBCTemplate.getConnection();
            Statement statement = con.createStatement(); {

            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
