const { Node } = require('../01_node/node');
const { printLinkedList } = require('./printLinkedList');

/**
 * Return a linked list of the fibonacci sequence.
 * There should be n nodes in the list, and each
 * node should have the expected number in the sequence,
 * starting with 0, 1, ...
 * n is guaranteed to be an integer >= 1.
 *
 * Example: fibonacci(7); // 0 -> 1 -> 1 -> 2 -> 3 -> 5 -> 8
 */
const fibonacci = n => {
  // your code here
};

printLinkedList(fibonacci(7)); // 0 -> 1 -> 1 -> 2 -> 3 -> 5 -> 8
printLinkedList(fibonacci(1)); // 0
printLinkedList(fibonacci(2)); // 0 -> 1
