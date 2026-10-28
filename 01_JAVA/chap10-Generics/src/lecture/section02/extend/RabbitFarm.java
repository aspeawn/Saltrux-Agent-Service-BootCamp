package lecture.section02.extend;

// T extends Rabbit : T의 최대범위가 Rabbit이라는 뜻
//public class RabbitFarm<T extends Rabbit>  {
public class RabbitFarm<T extends Rabbit> {
    // 필드
    private T animal;

    // 생성자
    public RabbitFarm(T rb) {
        this.animal = rb;
    }

    // Getter & Setter
    public T getAnmial() {
        return animal;
    }

    public void setAnmial(T anmial) {
        this.animal = anmial;
    }
}
