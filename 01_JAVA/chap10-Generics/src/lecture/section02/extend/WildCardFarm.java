package lecture.section02.extend;

public class WildCardFarm {

//    // RabbitFarm의 제네릭 타입이 뭐든 매개변수로 받겠다.
//     public void anyType(RabbitFarm<?> farm) {
//         farm.getAnimal().cry();
//    }

    // Bunny이거나 Bunny를 부모로 가진 타입만 사용 가능
    public void extendType(RabbitFarm<? extends Bunny> farm) {

         farm.getAnmial().cry();
    }

    // Bunny이거나 Bunny의 부모만 가능
    public void superType(RabbitFarm<? super Bunny> farm) {
         farm.getAnmial().cry();
    }
}


// Rabbit -> Bunny -> DrunkenBunny

// Wildcard -> RabbitFarm<?> farm으로 위 3개 모두 사용 가능하게됐음

// extends는 Bunny 그 이하부터 가능

// super은 Bunny 그 이상 가능