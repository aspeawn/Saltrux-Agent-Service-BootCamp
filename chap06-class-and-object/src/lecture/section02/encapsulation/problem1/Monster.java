package lecture.section02.encapsulation.problem1;

public class Monster {
    // Alt + Insert로 Getter and Setter를 Generate해서 기본 형식을 자동으로 만들 수 있음
    // private : 해당 클래스에서만 접근 가능함   ->  유지 보수성 향상
    private String name;  // 몬스터의 이름
    private int hp;  // 몬스터의 체력

    // getter : 필드값을 읽기위한 메소드
    public int getHp() {
        return hp;
    }

    // setter : 필드값을 수정하기 위한 메소드
    // Monster 만든 인스턴스의 필드를 수정할 때는 setHP라고하는
    // 메소드로만 변경하자
    public void setHp(int num) {

        if(num > 0){
            System.out.println("양수값이 입력되어 몬스터의 체력을 바꿉니다.");
            this.hp = num;
        } else {
            System.out.println("음수값이 입력되어 체력을 0으로 저장합니다.");
            this.hp = 0;
        }

        // this : 인스턴스가 생성됐을 때 자신의 주소를 가리키는 키워드
//        this.hp = num;
    }

    // 필드에 직접 접근
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
