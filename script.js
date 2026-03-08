
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.onclick = () => {
nav.classList.toggle("active");
};

window.addEventListener("scroll", reveal);

function reveal(){

let reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let visible = 100;

if(elementTop < windowHeight - visible){
reveals[i].classList.add("active");
}

}

}
