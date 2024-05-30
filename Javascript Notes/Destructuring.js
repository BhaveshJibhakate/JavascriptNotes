// Array destructuring
let numbers = [1, 2, 3, 4, 5];

// Basic example
let [a, b, c] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

// Skipping elements
let [x, , y] = numbers;
console.log(x); // Output: 1
console.log(y); // Output: 3

// Using rest parameter to capture remaining elements
//Rest Parameter (...)
//The rest parameter allows you to represent an indefinite number of arguments as an array.
let [first, ...rest] = numbers;
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]

// Default values
//If there would have been no 5 th element then output would be 0
let [p, q, r, s, t = 0] = numbers;
console.log(t); // Output: 5

////destructuring of objects
let{e,f}={a:1,b:5}
console.log(e,f);   ///output of this would be undefined undefined because e,f keys does not exist in original object
// let{e,f}={e:1,f:5}  is the solution

let arr1=[3,5,8]
let obj={...arr1}// converting into key value pair
console.log(obj);
