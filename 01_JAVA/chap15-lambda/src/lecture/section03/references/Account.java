package lecture.section03.references;

public class Account {

    private String ownerName;
    private int balance;

    // OwnerName을 매개변수로 받는 생성자
    public Account(String ownerName) {
        ownerName = ownerName;
    }

    @Override
    public String toString() {
        return "Account{" +
                "ownerName='" + ownerName + '\'' +
                ", balance=" + balance +
                '}';
    }
}
