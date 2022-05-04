const alex = document.getElementById("alex")
const noz = document.getElementById("noz")
const neltharion = document.getElementById("neltharion")
const ysera = document.getElementById("ysera")
const malygos = document.getElementById("malygos")

document.body.style.overflow = "hidden";

alex.addEventListener("click", function(){
    window.location.href="alex.html"
})

noz.addEventListener("click", function(){
    window.location.href="noz.html"
    console.log("poop")
})

neltharion.addEventListener("click", function(){
    window.location.href="neltharion.html"
})

ysera.addEventListener("click", function(){
    window.location.href="ysera.html"
})

malygos.addEventListener("click", function(){
    window.location.href="malygos.html"
})
