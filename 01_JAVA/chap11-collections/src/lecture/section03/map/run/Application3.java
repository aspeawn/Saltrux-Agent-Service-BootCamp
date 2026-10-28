package lecture.section03.map.run;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Application3 {
    public static void main(String[] args) {

        Properties prop = new Properties();

        try(FileInputStream input = new FileInputStream("settings.properties")) {
            // load() : FileInputStream을 이용해 파일을 읽어옴
            prop.load(input);
        } catch(IOException e) {

        }

        System.out.println("prop = " + prop);
    }
}
