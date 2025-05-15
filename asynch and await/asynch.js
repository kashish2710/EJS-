async function greet() {
    // throw "some error occured!";
setTimeout(() => {
    console.log("good morning!");
}, 1000);
    
    
}
greet()
.then((result)=>{
    console.log("promise resolved",result);
})
.catch((err)=>{
    console.log("error-",err);
})

async function sayhello() {
    await greet();
   
    
}