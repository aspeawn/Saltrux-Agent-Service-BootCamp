package lecture.section01.enumtype;

public enum Subjects {

    // 상수들
    JAVA,
    MYSQL,
    JDBC,
    HTML,
    CSS,
    JAVASCRIPT;

    @Override
    public String toString() {
        return "=====" + this.name() + "=====";
    }
}
