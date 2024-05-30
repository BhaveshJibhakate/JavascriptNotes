function register(callback) {
    setTimeout(()=>{console.log("this is the registering method") 
     callback()
    },2000)
}
/* By adding setTimeout we are simulating the asynchronus behaviour 
 like we may have delay if we make api request over a network */
function login(callback) {
setTimeout(()=>{  console.log("this is the login method")
callback() 
 },2000)
}

function data() {
console.log("data is valid")
}


register(()=>{ 
    login(()=>{
         data() })

})