package exercise.advanced;

import java.util.Scanner;

public class practice3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("문자열 내 알파벳 개수 : ");
        int N = sc.nextInt(); sc.nextLine();
        System.out.print("문자열을 입력하세요 : ");
        String str = sc.nextLine();

        str = str.replace(" ", "");
        char[] alpha = str.toCharArray();
        // 공백 제거 후 char 배열

        // 핵심 로직 : 알파벳 소문자에서 'a'를 빼면 알파벳 인덱스(순서)가 남는다

        System.out.print("숫자를 입력하세요 : ");
        int num = sc.nextInt();

        for(int i=0;i<alpha.length;i++) {

            if(alpha[i]>= 'a' && alpha[i]<='z')
                alpha[i] = (char)((alpha[i]-'a'+num)%26 + 'a');
            else if(alpha[i]>= 'A' && alpha[i]<='Z')
                alpha[i] = (char)((alpha[i]-'A'+num)%26 + 'A');
        }

        for(int i=0;i<alpha.length;i++){
            System.out.print(alpha[i]+" ");
        }
    }
}
