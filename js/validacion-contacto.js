window.addEventListener('DOMContentLoaded',(e) =>{
    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const mail = document.getElementById("mail")
    const celular = document.getElementById("celular")
    const comentario = document.getElementById("comentario")
    const formulario = document.getElementById("formulario")
    const inputs = document.querySelectorAll("#formulario input")
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        celular: /^\d{7,14}$/
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "nombre":
                if(expresiones.nombre.test(e.target.value)){

                } else {
                    document.getElementById('formulario').classList.add('')
                }
            break;
            case "apellido":
                
            break;
            case "mail":
                
            break;
            case "celular":
                
            break;
            case "comentario":
                
            break;
        }
    }

    formulario.addEventListener("submit", (e) =>{
        e.preventDefault()
        if(nombre.value.length <6){
            alert("Nombre muy corto")
        }
    })

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    })
})
