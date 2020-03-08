## Iterating Through Linked Lists

### Getting Started

In many code challenges, you will need to interate through (aka `traverse`) the nodes in a linked list. This is a fundamental operation you need to be able to do in your sleep.

Traversing a linked list has a similar purpose as iterating through an indexed array. We want to visit all of the items in the list, in order.

However, the code to traverse a linked list is very different from the code for iterating through an indexed array. In interview code, a linked list is usually a simple instance of a `Node`, which means:

- Unlike arrays, a `Node` does **not** have a `length` property.
- Linked lists do not have numbered indexes.

When traversing a linked list, we need to know **where to start**, **how to move to the next item**, **when to stop**, and **where we are** at the current moment. But we do not know how long the list is, and we have no references to the current item in the list like an index number.

Here's how we solve these problems.

- **Where to start:** You'll usually be writing a function that takes an instance of a `Node` as an argument. That's the node we start with.
- **Where we are:** We create a **pointer variable**. This variable (often called `curr`) will always refer to the node we are looking at now.
- **How to move forward:** Every `Node` instance has a `next` property which refers to the next node in the list. We can move forward by **reassigning** our pointer: `curr = curr.next`.
- **How to stop:** We reach the end of the list when `curr.next` is `null`.

### Exercises

First we'll practice traversing a list that already exists.

1. Walk through the code for `printLinkedList.js` and convince yourself that it works, and why.
2. `length.js`: write a function that counts the nodes in a linked list.
3. `double.js`: write a function that visits each node and doubles its value.
4. `fizzbuzz.js`: write a function that traverses a linked list and changes the node values to `fizz`, `buzz`, and `fizzbuzz`.

If there's time, here are some trickier ones to do next!

1. `makeListOfSize.js`: Make a linked list of size n with values 0...n-1. You will need to iterate through the integers **and** traverse the list.
1. `fibonacci.js`: Make a linked list with nodes that have values in the Fibonacci series. This one is super tricky!

For the tricky ones, you'll discover that the `Node` class does not have a `push` method. So you'll have to figure out how to add a new node to the end of the list. (Hint: can I do this by incrementing my pointer?)

The most important thing about these exercises is to keep talking and never give up. At the same time, after a certain point it is probably more helpful to see some answers. If you want to see the answers, they are on a separate branch.
