// console.log("hello world");
// let abc=Math.random()
// console.log(abc)

/*Below fetch body have then method whose body does not have 
  arrow function but it has ability to implicitly pass its response to
  next then method  */

fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => console.log(json))

 /* while below has arrow function so we explicitly need to 
 add return statement otherwise output from first then() will 
 not go to second then*/ 
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{return response.json()})
    .then((json)=>{console.log(json)})


 /*  Below is another way to write upper fetch body    */
    
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((x)=>{ let y=x.json()
    //      return y}).then((z)=>{console.log(z);})

    