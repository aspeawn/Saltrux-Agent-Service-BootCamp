package exercise.hard.Q2;

import java.util.ArrayList;
import java.util.List;

public class Application {
    public static void main(String[] args) {
        DataProcessor dp = new DataProcessor();

        dp.addData(10);
        dp.addData(20.5);
        dp.addData(30);
        dp.addData(40.7);

        System.out.println("데이터 처리 결과 : " + dp.processData());
    }
}
