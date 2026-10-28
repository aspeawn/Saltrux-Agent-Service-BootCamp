package lecture.section02.stream;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class Application1 {
    public static void main(String[] args) {
        /*
        * 스트림 : 자바 프로그램과 외부 데이터를 연결하는 통로 (단방향)
        *
        * - 입력스트림 - 데이터를 읽어오기 위한 스트림 ( FileInputStream, FileReader )
        * - 출력스트림 - 데이터를 출력하기 위한 스트림
        * */
        FileInputStream fin = null;

        /*
        * try-with-resources 구문
        * - try 문이 끝날 때 앞서 선언한 객체의 close()를 호출해준다.
        * */

        try  {
            fin = new FileInputStream("src/lecture/section02/stream/testInputStream.txt");

            int value;
            // read() : 파일에 기록된 값을 순차적으로 읽어오고, 더이상 읽을게없으면 -1을 반환
            while((value = fin.read()) != -1) {

                // 한글은 한글자에 3byte
                System.out.println((char)value);
            }
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        /* 스트림은 사용후에 닫아주어야 한다.
        finally {
            if(fin != null) {

                try {
                    fin.close();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
        }*/
    }
}
