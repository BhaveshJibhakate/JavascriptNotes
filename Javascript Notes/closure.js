function outer()
{
let a=20
function inner()  //closure is the function bundled in its lexical environment and 
                  //has access to the variable from outer function even after 
                  //outer fuctions execution is over
{
  console.log(a)   
}
   return inner;
}

const closurefun= outer()
closurefun()  //this funtion still has access to outer variable from outer function even after its execution
