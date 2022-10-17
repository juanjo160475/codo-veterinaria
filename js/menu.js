window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.addEventListener('DOMContentLoaded',(event) =>{
const menuBtn = document.getElementById ('menu')
const navegar = document.getElementById('ul-nav')
const body = document.querySelector('body')

menuBtn.addEventListener("click",(event) =>{
menuBtn.classList.toggle('salir')
navegar.classList.toggle('visible')
body.classList.toggle('no-scroll')
})
})