
// //function without any call back
let data;
function internetspeed(data){
    let random=Math.floor(Math.random()*10)+1;
if(random>4){
    console.log(`this data:${data} saved in DB .`)
}
else{
    console.log("your data not saved in DB. ")
}
}
internetspeed("hello world");


//function with callback 

function internetspeed(data,success,failure){
    let random=Math.floor(Math.random()*10)+1;
if(random>4){
    success();
}
else{
   failure();
}

}
internetspeed("data1 ",()=>{
    console.log("data1 saved !")
    internetspeed("data2",()=>{
        console.log("data2 saved");
    },()=>{
        console.log("data2 not saved");
    })
},()=>{
    console.log("data1 not saved!")
})
