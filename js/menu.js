document.getElementById("id-nav").innerHTML=
`
        <button id="menu">
            <span id="menu-abrir">&#9776;</span>
            <span id="menu-cerrar">X</span>
        </button>
        <ul class="ul-nav" id="ul-nav">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="clientes.html">Clientes</a></li>
            <li><a href="servicios.html">Servicios</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            <li><a href="cat-api.html">Gatos</a></li>
        </ul>
    
    
`
document.getElementById('id-footer').innerHTML=
`
Redes sociales:
<div class="footer">
    <div class="redes">
        <img src="imagenes/facebook.ico" width="14px">
        <a href="https://facebook.com/veterinariairlanda" target="_blank">Facebook</a>
    </div>
    <div class="redes">
        <img src="imagenes/whatsapp.ico" width="14px">
        <a href="https://api.whatsapp.com/send?phone=54911435446547" target="_blank">Whatsapp</a>
    </div>
    <div class="redes">
        <img src="imagenes/instagram.ico" width="14px">
        <a href="https://instagram.com/veterinariairlanda" target="_blank">Instagram</a>
    </div>

</div>
`

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