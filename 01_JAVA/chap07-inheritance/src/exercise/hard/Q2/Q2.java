package src.exercise.hard.Q2;

public class Q2 {
    public static void main(String[] args) {
        Worker[] workers = new Worker[2];
        workers[0] = new Developer();
        workers[1] = new Designer();

        for (Worker wk : workers) {
            wk.work();
        }
    }
}
