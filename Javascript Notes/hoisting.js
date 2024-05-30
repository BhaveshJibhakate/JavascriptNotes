//hoisting is a default behaviour in javascript where variable and functions 
//*****declaration not initialization*** get on top of their scope before code execution


console.log(a) //even though i have access the a before declaration it will show undefined
var a=23       // since it is var it will undefined because it get assigned with undefined value 

//for let and const  they get hoisted but declaration to actual initialzation they remain in
// temporal dead zone so  they remain without default initialization.

fun1()   // calling funcion even before it is declared

function fun1(){
    console.log("this is fun1 function")
}

//the anonymous function definition does not get on top

               
//   console.log(b)
//  let b=12  //ReferenceError: Cannot access 'b' before initialization

