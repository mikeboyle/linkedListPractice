const { Node } = require('../01_node/node');
const { printLinkedList } = require('./printLinkedList');

/**
 * Iterate through the linked list and 'double' the value
 * stored in each node.
 */
const double = node => {
  let curr = node;
  while (curr) {
    curr.val += curr.val;
    curr = curr.next;
  }
  return node;
};

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
A.next = B;
B.next = C;

const doubled = double(A);
printLinkedList(doubled); // expected AA -> BB -> CC

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;

printLinkedList(double(one)); // expected 2 -> 4 -> 6
