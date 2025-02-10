// let addBut=document.createElement("button");
// addBut.innerText="click me";
// addBut.style.color="white"
// addBut.style.backgroundColor="red";
// document.querySelector("body").prepend(addBut);

// let para=document.querySelector("p");
let btn1=document.querySelector("#hom");
btn1.onclick=()=>{
   console.log("btn 1 was clicked") ;
   let a=25;
   a++;
   console.log(a);
}

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("you clicked");
}