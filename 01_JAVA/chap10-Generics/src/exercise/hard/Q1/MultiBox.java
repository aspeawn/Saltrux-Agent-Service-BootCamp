package exercise.hard.Q1;

public class MultiBox <T, V>{
    private T firstData;
    private V secondData;

    public void setFirstData(T firstData) {
        this.firstData = firstData;
    }

    public void setSecondData(V secondData) {
        this.secondData = secondData;
    }

    public void printData() {
        System.out.println("첫 번째 데이터: " + firstData + ", 두 번째 데이터: " + secondData);
    }
}
