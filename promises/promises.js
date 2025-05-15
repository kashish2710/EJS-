//using promises for asynchronous operations
//resolve or reject


function savetodb(data){
   return new Promise((success,failure)=>{
    let internetspeed=Math.floor(Math.random()*10)+1;
    if (internetspeed > 4){
        success("successful");  
    }
    else{
        failure("data not saved");
    }
   });
    }
savetodb("hello world")
.then(()=>{
    console.log("promise is fulfilled");
})
.catch(()=>{
console.log("promise is rejected!");

})