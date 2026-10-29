package section01.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;


// Aspect : 로깅, 성능측정, 예외 처리같은 공통기능을 모아둔 클래스
// Advice : 실제 공통기능이 작성된 메소드
@Component
@Aspect
public class MemberAspect {

    // excution() 기본형태
    // excution(반환형 패키지.클래스.메소드명(매개변수))
    // * : 무엇이든 가능함
    // (..) : 매개변수의 개수와 타입은 무엇이든 가능
    @Pointcut("execution(* section01.aop.MemberServiceImpl.processMember(..))")
    public void advicePointCut() {
        System.out.println("PointCut 호출");
    }

    @Before("advicePointCut()")
    public void beforeAdvice() {
        System.out.println("[Before] 메소드 실행 전...");
    }

    // Aspect of Programming
    // pointcut
    @AfterReturning(value = "advicePointCut()", returning = "result")
    public void afterReturningAdvice(Object result) {
        System.out.println("[AfterReturning] 반환값 : " + result);
    }

    @After("advicePointCut()")
    public void afterAdvice() {
        System.out.println("[After] 메소드 실행 후...");
    }

    @AfterThrowing(pointcut = "advicePointCut()", throwing = "exception")
    public void afterThrowingAdvice(Exception exception) {
        System.out.println("[AfterThrowing 예외 : " + exception.getMessage());
    }

    @Around("advicePointCut()")
    private Object aroundAdvice(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.nanoTime();
        System.out.println("[Around -전] 메소드 실행 전");

        try{
            // proceed()가 Target 메소드를 실행한다.
            return joinPoint.proceed();
        }
        finally {
            long executionTime = System.nanoTime() - startTime;
            System.out.println("[Around 후] 실행 시간 : " + executionTime + "ns");
        }
    }
    /*
    Within : 해당 클래스 내부를 선택
     */

    @Before("within(section01.aop.MemberServiceImpl) && execution(* selectMembers(..))")
    public void withinPointCut() {
        System.out.println("[within] MemberServiceImpl 적용");
    }

    @Before("this(section01.aop.MemberService) && execution(* checkMembers(..))")
    public void thisPointCut() {
        System.out.println("[this] MemberService 적용");
    }

    @Before(value = "args(name,age) && execution(* registerMember(..))", argNames = "name, age" )
    public void argsPointCut(String name, int age) {
        System.out.println("[args] MemberService 적용" + name + ", " + age);
    }

    // 어노테이션 만들기
    @Before("@annotation(AopLog)")
    public void annotationPointCut() {
        System.out.println("[annotation] @AopLog 적용");
    }


    @Before("execution (* selectMember(..))")
    public void selectPointCut() {
        System.out.println("[Pointcut] selectMember 적용");
    }
}
