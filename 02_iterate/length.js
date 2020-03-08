const { Node } = require('../01_node/node');

const length = node => {
  // your code here
};

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
A.next = B;
B.next = C;

console.log(length(A)); // expected: 3
