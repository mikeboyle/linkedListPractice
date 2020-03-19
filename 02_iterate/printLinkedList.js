const { Node } = require('../01_node/node');

/**
 * Given a linked list node, print out its values.
 * Ex: A -> B -> C
 */
const printLinkedList = node => {
  // Create a results string that we'll build up
  let res = '';

  // Set the pointer to the start
  let curr = node;

  // Use node.next to iterate through all nodes
  // until we finish the list and hit a null node
  while (curr) {
    // Add the value to the results string.
    // If there is a next value, add the -> pointer
    res += curr.val;
    if (curr.next) {
      res += ' -> ';
    }

    // "Increment" the pointer to the next node
    curr = curr.next;
  }

  console.log(res);
};

const testPrintLinkedList = () => {
  const A = new Node('A');
  const B = new Node('B');
  const C = new Node('C');
  A.next = B;
  B.next = C;

  printLinkedList(A);
};
// testPrintLinkedList();

module.exports = { printLinkedList };
