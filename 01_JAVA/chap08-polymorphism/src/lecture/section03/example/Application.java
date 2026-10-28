package lecture.section03.example;

public class Application {
    public static void main(String[] args) {
        BankTransferPaymentProcess bank = new BankTransferPaymentProcess();
        CreditCardPaymentProcess credit = new CreditCardPaymentProcess();

        OrderService odService = new OrderService(bank);
        odService.checkout(50000);
    }
}
