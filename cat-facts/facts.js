let btn= document.querySelector("#cat");

btn.addEventListener("click",async()=>{
    let fact=await getfacts();
    console.log(fact);
    let para=document.getElementById("result");
    para.innerHTML=fact;
});

let url="https://catfact.ninja/fact";
async function getfacts() {
    try{
  let response= await axios.get(url);
    return response.data.fact;
    }
   catch(err){
    console.log("error- ",err);
    return "no fact found";

   } 
  
}
let dogurl="https://dog.ceo/api/breeds/image/random";
async function getpic() {
    try{
        let res= await axios.get(dogurl);
        console.log(res.data.message);
           return res.data.message;
    }
    catch(err){
        console.log("error found:-",err);
        return "no error found"
    }
    
}
let btn2=document.querySelector("#dog");
btn2.addEventListener("click",async()=>{
    let link=await getpic();
    let photo=document.querySelector("#pic");
    photo.setAttribute("src",link);
    
})