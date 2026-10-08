package lecture.section02.stream;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class Application3 {
    /*
     * 스트림 : 자바 프로그램과 외부 데이터를 연결하는 통로 (단방향)
     *
     * - 입력스트림 - 데이터를 읽어오기 위한 스트림 ( FileInputStream, FileReader )
     * - 출력스트림 - 데이터를 출력하기 위한 스트림 ( FileOutputStream, FileWriter )
     * */

    public static void main(String[] args) {

        try(FileOutputStream fout = new FileOutputStream("src/lecture/section02/stream/testOutputStream.txt")) {
            byte[] bar = new byte[] {98, 99, 100, 101, 102};
            fout.write(97);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
