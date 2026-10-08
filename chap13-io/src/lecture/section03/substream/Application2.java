package lecture.section03.substream;

import lecture.section03.substream.dto.MemberDTO;

import java.io.*;

public class Application2 {
    public static void main(String[] args) {

        MemberDTO[] outputMembers = {
                new MemberDTO("user01", "pass01", "홍길동", "hong777@ohgiraffers.com", 25, '남', 1250.7),
                new MemberDTO("user02", "pass02", "유관순", "korea31@ohgiraffers.com", 16, '여', 1221.6),
                new MemberDTO("user03", "pass03", "이순신", "leesoonsin@ohgiraffers.com", 22, '남', 1234.6)};
        try (
                FileOutputStream fo = new FileOutputStream("./object.dat");
                BufferedOutputStream bfo = new BufferedOutputStream(fo);     // 기본스트림 객체를 생성자에 전달
                ObjectOutputStream oos = new ObjectOutputStream(bfo);        // 기본스트림 + 버퍼스트림 객체를 생성자에 전달
        ) {

            // 반복하며 배열안의 모든 객체를 write 하게함.
            for (MemberDTO dto : outputMembers) {
                oos.writeObject(dto);
            }

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        ////////

        // Object 파일 읽기
        MemberDTO[] inputMembers = new MemberDTO[3];

        try (
                FileInputStream fo = new FileInputStream("./object.dat");
                BufferedInputStream bfo = new BufferedInputStream(fo);     // 기본스트림 객체를 생성자에 전달
                ObjectInputStream oos = new ObjectInputStream(bfo);        // 기본스트림 + 버퍼스트림 객체를 생성자에 전달
        ) {
//            while (true) {
//                System.out.println(oos.readObject());
//            }

            for (int i = 0; i < inputMembers.length; i++) {
                inputMembers[i] = (MemberDTO) oos.readObject();
            }

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        for(MemberDTO dto : inputMembers) {
            System.out.println(dto);
        }
    }
}