package exercise.basic.Q1;

import java.util.*;

public class Applicaiotn {
    public static void main(String[] args) {

        // Q1. ArrayList
        List lt = new ArrayList();

        lt.add(5);
        lt.add(3);
        lt.add(8);
        lt.add(1);
        lt.add(2);

        Collections.sort(lt);
        System.out.println(lt);

        // Q2. LinkedList
        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("A");
        linkedList.add("B");
        linkedList.add("C");
        linkedList.add("D");
        linkedList.add("E");
        System.out.println("첫 번째 요소: " + linkedList.getFirst());
        System.out.println("마지막 요소: " + linkedList.getLast());

        // Q3. Stack (LIFO)
        Stack<Integer> stack = new Stack<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println("peek: " + stack.peek());
        while (!stack.isEmpty()) {
            System.out.println("pop: " + stack.pop());
        }

        // Q4. Queue (FIFO)
        Queue<String> q = new LinkedList<>();
        q.offer("A");
        q.offer("B");
        q.offer("C");
        System.out.println("peek: " + q.peek());
        while (!q.isEmpty()) {
            System.out.println("poll: " + q.poll());

        }
    }
}
