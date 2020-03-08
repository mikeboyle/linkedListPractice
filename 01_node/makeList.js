const { Node } = require('./node');

/**
 * Create a linked list with three nodes, A -> B -> C
 * There are many ways you can do this!
 */
const list = new Node('A');
list.next = new Node('B');
const B = list.next;
B.next = new Node('C');

console.log(JSON.stringify(list));

/**
 * Create a linked list that spells your first or last name.
 * Example: K -> E -> L -> L -> Y
 * (Why are double letters tricky?)
 */
const makeLNode = () => new Node('L');
const K = new Node('K');
const E = new Node('E');
const firstL = makeLNode();
const secondL = makeLNode();
const Y = new Node('Y');

const nameList = K;
K.next = E;
E.next = firstL;
firstL.next = secondL;
secondL.next = Y;

console.log(JSON.stringify(nameList));
