package exercise.hard.Q1;

import java.io.*;

/*      보조 스트림(ObjectInputStream / ObjectOutputStream) - 사용자 정의 객체 파일 저장 & 읽기
 *   ② "member.dat" 파일에 Member("홍길동", 20) 인스턴스를
 *      ObjectOutputStream + FileOutputStream + BufferedOutputStream 으로 저장한다.
 *          - FOS : 파일을 읽어옴
 *          - BOS : 기본 스트림 객체 -> 생성자에 전달
 *          - OOS : 기본 스트림 객체 + 버퍼스트림(BOS) -> 생성자에 전달
 *
 *
 * */
public class Application {
    public static void main(String[] args) {

        Member mem = new Member("홍길동", 20);

        // FOS -> BFO -> OOS
        // try (내용) :  try-with-resources (내용)안에 있는 스트림을 자동으로 닫음
        try (FileOutputStream fos = new FileOutputStream("member.dat");
             BufferedOutputStream bfo = new BufferedOutputStream(fos);
             ObjectOutputStream oos = new ObjectOutputStream(bfo);)
        {
            // 객체 인스턴스를 member.dat에 저장
            oos.writeObject(mem);

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        // Object 파일 읽기
        // ③ 같은 파일을 ObjectInputStream + FileInputStream + BufferedInputStream 으로 읽어와
        // readObject() 결과를 Member 로 형변환 후 toString() 결과를 출력한다.
        Member inputMem;
        try (
                FileInputStream fo = new FileInputStream("member.dat");
                BufferedInputStream bfo = new BufferedInputStream(fo);     // 기본스트림 객체를 생성자에 전달
                ObjectInputStream oos = new ObjectInputStream(bfo);        // 기본스트림 + 버퍼스트림 객체를 생성자에 전달
        ) {
            inputMem = (Member) oos.readObject();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
        System.out.println(inputMem);
    }
}
