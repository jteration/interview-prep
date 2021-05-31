import { ArrayQueue } from './Queue/implement.mjs';
import util from 'util';

const queue = new ArrayQueue(5);

queue.enqueue("Test");
queue.enqueue("Test1");
queue.enqueue("Test2");
queue.enqueue("Test3");
queue.enqueue("Test4");
queue.dequeue();
queue.enqueue("Test5");
const test = queue.dequeue();
queue.enqueue("Test6");
console.log(test);

// console.log(util.inspect(linkedList.head, false, null, true));
