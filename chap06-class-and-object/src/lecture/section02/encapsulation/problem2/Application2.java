package lecture.section02.capsulation.problem2;

import lecture.section02.encapsulation.problem2.Monster;

public class Application2 {
    public static void main(String[] args) {

        Monster monster1 = new Monster(); // 인스턴스화

        //필드에 직접 접근한다
        monster1.getName();
        monster1.getHp();


        Monster monster2 = new Monster(); // 인스턴스화

        //필드에 직접 접근한다
        monster2.getName();
        monster2.getHp();


        Monster monster3 = new Monster(); // 인스턴스화

        //필드에 직접 접근한다
        monster3.getName();
        monster3.getHp();
    }
}
