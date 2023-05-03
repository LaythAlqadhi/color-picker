function colors(){
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
document.body.style.background = `rgb(${red.value},${green.value},${blue.value})`;
document.querySelector("span").innerHTML = `RGB(${red.value},${green.value},${blue.value})`
}