package lecture.section02.stream;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;

public class Application4 {
    public static void main(String[] args) {

        try(FileWriter fout = new FileWriter("src/lecture/section02/stream/testWriterStream.txt")) {

            // char로 변경
            char[] bar = new char[] {98, 99, 100, 101, 102};
            fout.write("안녕하세요 10월8일입니다");
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
