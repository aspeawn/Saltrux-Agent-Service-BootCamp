package lecture.section02.extend.run;

import lecture.section02.extend.*;

public class Application2 {
    public static void main(String[] args) {
        /*
         * 와일드 카드 [ ? ]
         * <?> : 제한없음
         * <? extends Type> : 와일드카드의 상한 제한 (TYPE과 TYPE의 후손으로만 사용 가능)
         * <? super TYPE> : 와일드카드의 하한 제한 (TYPE과 TYPE의 부모로만 사용 가능)
         * */
        WildCardFarm wildCardFarm = new WildCardFarm();

        // anytype(RabbitFarm<?>)

//        wildCardFarm.anyType(new RabbitFarm<Rabbit>(new Rabbit())); 아래 두줄을 축약한 ver
        Rabbit rabbit = new Rabbit();
        RabbitFarm rabbitFarm = new RabbitFarm(rabbit);
//
//        wildCardFarm.anyType(new RabbitFarm<Rabbit>(new Bunny()));
//        wildCardFarm.anyType(new RabbitFarm<Rabbit>(new DrunkenBunny()));

        // extendsType(RabbitFarm<? extends Bunny> farm)
        // Bunny의 상위타입(Bunny의 자식)으로 만든 토끼만 가능
//        wildCardFarm.extendType(new RabbitFarm<>(new Rabbit()));
        wildCardFarm.extendType(new RabbitFarm<>(new Bunny()));
        wildCardFarm.extendType(new RabbitFarm<>(new DrunkenBunny()));

        // superType(RabbitFarm<? super Bunny> farm)
        // Bunny 또는 Bunny의 부모 타입만 가능
        wildCardFarm.superType(new RabbitFarm<Rabbit>(new Rabbit()));
        wildCardFarm.superType(new RabbitFarm<Bunny>(new Bunny()));
//        wildCardFarm.superType(new RabbitFarm<DrunkenBunny>(new DrunkenBunny()));  불가능

    }
}
