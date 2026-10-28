package lecture.section03.substream;

import java.io.*;

public class Application1 {

    public static void main(String[] args) {
        /*
        * BufferStream
        * - 버퍼 기능을 이용해서 성능을 향상시키는 보조 스트림
        * */
//
//        try(
//                FileWriter fw = new FileWriter("src/lecture/section03/substream/testBuffered.txt");
//                ) {
//            // FileWriter 객체를 BufferedWriter의 생성자에 전달
//            BufferedWriter bfw = new BufferedWriter(fw);
//
//            bfw.write("안녕하세요");
//            bfw.write("반갑습니다");
//
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }


        // BufferedReader
        try(
                FileReader fr = new FileReader("src/lecture/section03/substream/testBuffered.txt");

                // FileReader 객체를 BufferedWriter의 생성자에 전달
                BufferedReader bfR = new BufferedReader(fr);
        ) {
            String temp;
            while ((temp = bfR.readLine()) != null )
            {System.out.println(temp);}
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
