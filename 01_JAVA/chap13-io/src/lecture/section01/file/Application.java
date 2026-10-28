package lecture.section01.file;

import java.io.File;
import java.io.IOException;

public class Application {
    public static void main(String[] args) {
        /*
        * File 클래스
        * - 파일 처리를 수행하는 클래스
        * - 파일 생성, 삭제, 정보 조회 등의 기능을 제공
        * */

        File file = new File("src/lecture.section01/file/test.txt");

        try {
            // 경로에 해당하는 파일을 생성
            boolean createSuccess = file.createNewFile();
            System.out.println(createSuccess);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        System.out.println("파일의 크기 : " + file.length() + "byte");
        System.out.println("파일의 경로 : " + file.getPath());
        System.out.println("파일의 절대 경로 : " + file.getAbsolutePath());

        file.delete();
    }

}

