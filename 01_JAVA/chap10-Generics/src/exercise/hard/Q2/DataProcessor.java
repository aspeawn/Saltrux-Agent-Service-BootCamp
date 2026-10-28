package exercise.hard.Q2;

import java.util.ArrayList;
import java.util.List;

public class DataProcessor{
    private List<? extends Number> dataList = new ArrayList<Number>();


    public void addData(Number data) {
        List<Number> newList = new ArrayList<>(dataList);
        newList.add(data);
        dataList = newList;
    }

    public List<? extends Number> processData() {
        return dataList;
    }

}
