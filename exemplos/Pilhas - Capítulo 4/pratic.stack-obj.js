import Stack from "./stack-obj";

const stack = new Stack();

//add elements
stack.push(12);
stack.push(2);
stack.push(5);
stack.push(65);
stack.push(75);
stack.push(89);

//isEmpty?
console.log(stack.isEmpty);

//remove the last element
console.log(stack.pop());

//get the last element
console.log(stack.peek());

//size of stack
console.log(stack.size());

//print the stack values in string 
console.log(stack.toString());

// clear the stack
stack.clear();

console.log(stack.item);