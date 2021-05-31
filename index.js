import { LinkedList } from "./LinkedLists/implement.mjs";

const linkedList = new LinkedList;

linkedList.pushFront("Test");

linkedList.pushFront("Test2");

linkedList.pushFront("Test3");

linkedList.pushFront("Test4");

console.log(linkedList.head);

linkedList.reverse();

console.log(linkedList.head);
