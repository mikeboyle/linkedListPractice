const { Node } = require('../01_node/node');
const { printLinkedList } = require('./printLinkedList');

/**
 * nthVal takes a list and a positive integer n,
 * and returns the value of the nth node in the list.
 * If n is greater than the number of nodes, it returns null.
 */
const nthVal = (node, n) => {
  // your code here
};

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
list = A;
A.next = B;
B.next = C;
C.next = D;

console.log(nthVal(list, 2)); // B
console.log(nthVal(list, 4)); // D
console.log(nthVal(list, 11)); // null
