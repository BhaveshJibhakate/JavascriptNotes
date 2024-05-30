// Example promise that resolves after a delay
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const obj={user:"bhavesh",age:27}
        resolve(obj);  //i could have taken resolve("promise resolved after 2 seconds") instead of resolve(obj)
        
    }, 2000);
})
//console.log(myPromise);

myPromise
.then((result) => {
    console.log(result);
     return result // Logging the resolved value to the console
})
.then((data)=>{for (let i = 1; i <= 5; i++) {
    console.log("this is another for demo"," ",data);
  }
  })
.then(()=>{ console.log("  example for chaining ") }).then(()=>{console.log(myPromise)})
.catch((error) => {
    console.error(error); // Logging any errors to the console
});


// Consuming the promise and logging the resolved value
