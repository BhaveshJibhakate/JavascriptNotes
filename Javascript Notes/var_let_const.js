
//  var vs let vs const 

// Redeclaration is possible with **var** only  not with let , const
 
// var a=20                 let b=5
// var a=30                 let b=4  //error cant redeclare  same with const
//  console.log(a);

//  Reassignment is possible with var and let but not with const

var a=20             //  let b=5
 a=4                  //  b=20    console.log(b)  no error but not possible with const
console.log(a);


// var is global scope varible while both let and const are block scope within which they 
// are declared


