      /////  foreach method for array  ////
const arr=[12,45,78,25,60]      /*foreach loop function is the higher order function that accepts function as argument
                                 and that function is callback function . this function is applied to each element present in array*/
arr.forEach(element => {         //element variable is the current value for iteration in loop
     
console.log(element*element);    //there is no point in writing return statement here because foreach loop cannot return value 
                                 // to create new array but map() can do that
});

console.log(arr); //no change in original array

/////////////////////////////////////////////////////////////////////////////////
        /*   Map method of array */
 const numbers = [1, 2, 3, 4, 5];

 const doubledNumbers = numbers.map(num => num * 2); // or numbers.map((num)=>{ return num*2 }) //expression so implicit return
               
 console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
               
/*map() method is used for creating a new array based on the transformation of each element in the original array.
 It applies a function to each element and returns a new array with the results. */

 //////////////////////////////////////////////////////////////////////////////
    
       /*  reduce method of array   */
     

 /*The reduce() method is an array method in JavaScript used for reducing the elements of an array to a single value.
It iterates over the array's elements and applies a provided function, known as the "reducer" function, to each element,
resulting in a single accumulated value.    
 */
const num1 = [1, 2, 3, 4, 5];

const sum = num1.reduce((accumulator, currentValue) => {
  
return accumulator + currentValue;
}, 0);     // here 0 is the initial value,if you avoid providing initial value 
           // initial value of accumulator will be first element of array and
           // iteration will start from second element 

console.log(sum); // Output: 15   //reduce does not return new array which map method does


///////////////////////////////////////////

/*       filter method of array   *///this method does return a new array 

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = number.filter(num => num % 2 === 0);// or number.filter((num)=>{ return num%2==0 })

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]  

  /* In map(),==== the callback function is used to transform each element, and the result is a new array where 
     each element is the transformed value of the corresponding element in the original array.
     In filter(),==== the callback function is used to determine which elements should be included in the new array based 
     on a specific condition. */
