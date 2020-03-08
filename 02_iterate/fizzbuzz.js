const { Node } = require('../01_node/node');
const { printLinkedList } = require('./printLinkedList');
const { setup } = require('./fizzbuzzSetup');

/**
 * Given a linked list whose values increase from 1,
 * replace the values in the nodes according to fizzbuzz rules.
 * If divisible by 3, replace with 'fizz',
 * If divisible by 5, replace with 'buzz',
 * If divisible by 15, replace with 'fizzbuzz'
 *
 * You can use the imported setup() function to create the linked list from 1-30.
 *
 */
const fizzbuzz = node => {
  let curr = node;
  while (curr) {
    if (curr.val % 15 === 0) {
      curr.val = 'fizzbuzz';
    } else if (curr.val % 3 === 0) {
      curr.val = 'fizz';
    } else if (curr.val % 5 === 0) {
      curr.val = 'buzz';
    }
    curr = curr.next;
  }
  return node;
};

const testList = setup();
printLinkedList(fizzbuzz(testList));
