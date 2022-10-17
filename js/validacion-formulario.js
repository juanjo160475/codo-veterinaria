const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	celular: /^\d{7,14}$/,
};

window.addEventListener('DOMContentLoaded',(e) =>{

const inputs = document.querySelectorAll('#formulario input');
const formulario = document.getElementById('formulario')
const nombre=document.querySelector('#nombre');
const apellido=document.querySelector('#apellido');
const mail=document.querySelector('#mail');
const celular=document.querySelector('#celular');

const campos = {
    nombre:false,
    apellido:false,
    mail:false,
    celular:false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre,e.target,'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido,e.target,'apellido');
        break;
        case "mail":
            validarCampo(expresiones.mail,e.target,'mail');     
        break;
        case "celular":
            validarCampo(expresiones.celular,e.target,'celular');
        break;
    }
}

const validarCampo = (expresion,input,campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('form_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('form_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.remove('formulario_input_error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo_${campo}`).classList.add('form_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('form_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.add('formulario_input_error-activo')
        campos[campo] = false;
    };
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
})

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(campos.nombre && campos.apellido && campos.mail && campos.celular){
        formulario.reset();

        document.getElementById('form_mensaje-exito').classList.add('form_mensaje-exito-activo');
        setTimeout(()=>{
            document.getElementById('form_mensaje-exito').classList.remove('form_mensaje-exito-activo');
        },5000)

        document.querySelectorAll('form_grupo-correcto').forEach((icono)=>{
            icono.classList.remove('form_grupo-correcto');
        })

        document.getElementById('form_mensaje').classList.remove('form_mensaje-activo')
    }
    else {
        document.getElementById('form_mensaje').classList.add('form_mensaje-activo')
    }
})
})