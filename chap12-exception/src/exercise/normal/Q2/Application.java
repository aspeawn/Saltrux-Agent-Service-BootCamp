package exercise.normal.Q2;

import java.io.*;
public class Application {

    /*
    * - FileReader 와 BufferedReader 를 try-with-resources 의 자원으로 함께 선언한다.
    * - "example.txt" 의 첫 줄을 readLine() 으로 읽어와 출력한다.
    *
    * FileReader 변수명 = new FileReader("파일명(경로)");
    * BufferedReader 변수명 = new BufferfedReader(읽을 내용);
    * */
    public static void main(String[] args) {

        try (
                BufferedReader in = new BufferedReader(new FileReader("chap12-exception/src/exercise/normal/Q2/example.txt"));
                )
        {
            String s;

            while((s = in.readLine()) != null){
                System.out.println(s);
            }
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }
}
