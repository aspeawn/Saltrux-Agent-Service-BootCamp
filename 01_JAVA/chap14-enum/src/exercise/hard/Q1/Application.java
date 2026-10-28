package exercise.hard.Q1;

import java.util.EnumSet;

public class Application {
    public static void main(String[] args) {

        System.out.print("MANAGER가 USER보다 높은가? ");
        System.out.println(UserRole.MANAGER.hasHigherLevelThan(UserRole.USER));

        EnumSet<UserRole>set = EnumSet.of(UserRole.MANAGER, UserRole.ADMIN);

        System.out.print("GUEST는 관리 권한? ");


        System.out.println();

    }
}
