let btn1=document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//    console.log(evt); 
//    console.log(evt.type);
// }

btn1.addEventListener("click",()=>{
  console.log("button was clicked");
});

btn1.addEventListener("click",()=>{
  console.log("button was clicked-1");
});

const handler=()=>{
  console.log("button was clicked-2");
};

btn1.addEventListener("click",handler);

btn1.addEventListener("click",()=>{
  console.log("button was clicked-3");
});

//REMOVE EVENT
btn1.removeEventListener("click",handler);