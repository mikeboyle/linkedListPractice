/**
 * Make a linked list that spells the letters
 * of your favorite food.
 *
 * Create your own Node class from scratch to do this!
 * DO NOT import the Node class from ./node.js
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let list = new Node('F');
list.next = new Node('L');
list.next.next = new Node('A');
list.next.next.next = new Node('N');

console.log(JSON.stringify(list));
