const { Node } = require('../01_node/node');

const linkedListValues = node => {
  // Create a results array to hold values
  const values = [];

  // Set the pointer to the start
  let curr = node;

  // Use node.next to iterate through all nodes
  // until we finish the list and hit a null node
  while (curr) {
    // Put the value in our results array
    values.push(curr.val);

    // "Increment" the pointer to the next node
    curr = curr.next;
  }

  return values;
};

const printLinkedList = node => {
  const values = linkedListValues(node);
  console.log(values.join(' -> '));
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
