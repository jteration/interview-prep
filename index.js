import { LinkedList } from "./LinkedLists/implement.mjs";
import util from 'util';

const linkedList = new LinkedList;

linkedList.pushBack("Test");

linkedList.pushBack("Test2");

linkedList.pushBack("Test3");

linkedList.pushBack("Test4");

console.log(util.inspect(linkedList.head, false, null, true));
console.log(linkedList.tail);
