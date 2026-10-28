package lecture.section02.superkeyword;

import java.util.Date;

public class Computer extends Product {

    private String cpu;                 // CPU 종류
    private int hdd;                    // HDD 용량
    private int ram;                    // RAM 용량
    private String operationSystem;     // OS

    // 기본 생성자
    public Computer(){
        // super();
        System.out.println("Computer 클래스의 기본 생성자 호출함...");
    }

    // Computer 필드만 초기화는 생성자
    public Computer(String cpu, int hdd, int ram, String operationSystem) {
        this.cpu = cpu;
        this.hdd = hdd;
        this.ram = ram;
        this.operationSystem = operationSystem;
        System.out.println("Computer 클래스의 모든 필드를 초기화하는 생성자 호출함...");
    }

    // 부모의 필드도 초기화하는 생성자
    public Computer(String code, String brand, String name, int price, Date manufacturingDate, String cpu, int hdd, int ram, String operationSystem) {
        super(code, brand, name, price, manufacturingDate);
        this.cpu = cpu;
        this.hdd = hdd;
        this.ram = ram;
        this.operationSystem = operationSystem;

        System.out.println("Computer 클래스의 부모 필드도 초기화하는 생성자 호출함.");
    }

    @Override
    public String toString() {
        return super.toString() +
                "Computer{" +
                "cpu='" + cpu + '\'' +
                ", hdd=" + hdd +
                ", ram=" + ram +
                ", operationSystem='" + operationSystem + '\'' +
                '}';
    }
}
