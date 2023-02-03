import Stack from "./stack-array";

const stack = new Stack();

//add elements
stack.push(14);
stack.push(137);
stack.push(174);
stack.push(12);

//size of stack
console.log(stack.size());

//remove the last element
console.log(stack.pop());

//get the first element
console.log(stack.peek());

//verify if the stack is empty
console.log(stack.isEmpty());

//clear the stack
stack.clear();

console.log(stack.item);
