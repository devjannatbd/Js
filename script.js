 const heading = document.getElementById("btn").addEventListener('click',document.body.style.backgroundColor = "red");

 document.getElementById("btn").addEventListener("click", function clickbtn() {
  document.body.style.backgroundColor = "red"
});

function jannat(){
  document.body.style.backgroundColor = "black"
};
const titler = document.getElementById("btn");
titler.addEventListener("click", function jannat(){
  titler.style.backgroundColor = "black"
});

const tomal = document.getElementById("btn");
tomal.addEventListener("click",function(){
  document.body.style.backgroundColor = "black";
});

/*addEventListener  & innerText with anonymush function*/

const jannati = document.getElementById("btn");
jannati.addEventListener("click",function(){
const para = document.getElementById("jannat");
para.innerText = "Myself JannaT";
});

/* addEventListener with anonymush function*/

const title = document.getElementById("btn");
title.addEventListener("click", function jannat(){
  title.style.backgroundColor = "black"
});

/* set onclick attribute using setAttribute*/

const butn = document.getElementById("btn");
function jannatul() {
butn.style.backgroundColor = "purple"
}
butn.setAttribute('onclick', "jannatul()");

/* input with using this*/

function inptext(j){
console.log(j)
} 

/* input with using toUpperCase*/
 function inptet(){
  const input = document.getElementById("texti");
input.value = input.value.toUpperCase();
 console.log(input.value);
 } 

/* onmouseover*/
function rakib(){
  const rakibp = document.getElementById("para") ;
  rakibp.innerText = "mouse hover is on"
};
/* onmouseout*/

function raja(){
  const rakibp = document.getElementById("para") ;
  rakibp.innerText = "mouse hover is out"
};

/*onkeypress, onkeydown, onkeyup onmousedown, onmouseup*/
function raju(){
  const rakibp = document.getElementById("paran") ;
  rakibp.innerText = "mouse hover is clicked"
};
function rana(){
  const rakibp = document.getElementById("paran") ;
  rakibp.innerText = "mouse hover is click out/blur"
};