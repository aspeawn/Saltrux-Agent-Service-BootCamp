package lecture.section02.grammar;

import java.util.Locale;

public enum UserRole1 {

    GUEST,
    CONSUMER,
    PRODUCER,
    ADMIN;

    // 생성자
    UserRole1() {
        System.out.println("[UserRole1 초기화]" + this.name());
    }

    public String getNameToLowerCase() {
        return this.name().toLowerCase();
    }
}
