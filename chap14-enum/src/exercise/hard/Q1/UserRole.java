package exercise.hard.Q1;

public enum UserRole {
    GUEST("게스트", 1), USER("일반회원", 2), MANAGER("매니저", 3), ADMIN("관리자", 4);

    private String description;
    private int level;

    UserRole(String description, int level) {
        this.description = description;
        this.level = level;
    }

    public String getDescription() {
        return description;
    }

    public int getLevel() {
        return level;
    }

    boolean hasHigherLevelThan(UserRole other){
        if(getLevel() > other.level)
            return true;
        else
            return false;
    }


}
