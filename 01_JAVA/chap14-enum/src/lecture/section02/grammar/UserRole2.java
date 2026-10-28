package lecture.section02.grammar;

public enum UserRole2 {

    // 상수
    GUEST("게스트"),
    CONSUMER("구매자"),
    PRODUCER("판매자"),
    ADMIN("관리자");

    // 필드
    private final String description;

    UserRole2(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
