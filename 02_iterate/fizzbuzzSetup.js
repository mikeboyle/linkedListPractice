const { Node } = require('../01_node/node');

const setup = () => {
  const head = new Node(1);
  let curr = head;
  for (let i = 2; i <= 30; i++) {
    curr.next = new Node(i);
    curr = curr.next;
  }
  return head;
};

module.exports = { setup };
