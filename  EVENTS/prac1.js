let btn=document.querySelector("#screen");
let currMode="light";
let body=document.querySelector("body");

// btn.addEventListener("click",() => {
//   if (currMode==="light"){
//    currMode="dark";
//    body.classList.add("dark");
//    body.classList.remove("light");
//   } else {
//     currMode="light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
//   console.log(currMode);
// })


btn.addEventListener("click",() => {
  if (currMode==="light"){
   currMode="dark";
   body.style.backgroundColor="black";
   body.style.color="white";
  } else {
    currMode="light";
    body.style.backgroundColor="white";
    body.style.color="black";
  }
  console.log(currMode);
})