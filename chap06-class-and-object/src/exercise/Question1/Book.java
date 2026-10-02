package exercise.Question1;

public class Book {
    private String title;
    private String author;
    private int pirce;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getPirce() {
        return pirce;
    }

    public void setPirce(int pirce) {
        this.pirce = pirce;
    }

    public Book(String title, String author, int pirce) {
        this.title = title;
        this.author = author;
        this.pirce = pirce;
    }
}
