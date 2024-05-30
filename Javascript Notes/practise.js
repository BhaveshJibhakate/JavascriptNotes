
function register(callback)  {
    setTimeout(() => {
        console.log("registering customer")
        callback()
    }, 2000);
        
}
function login() {
setTimeout(()=> {
    console.log("login user")
},2000)
}

const data=()=>{
    console.log("data is valid")
}
 
register(function callback() {
    login()    //first login will execute then only data will execute
    data()
} )
