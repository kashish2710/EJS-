let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
    console.log(response);
    response.json()
   .then((data)=>{
    console.log(data.fact);
   })
})
.catch((err)=>{
    console.log("error-",err);
})

//async and await
 
async function getfacts() {
    let res= await fetch(url);
    let fact= await res.json();
    console.log(fact);
}