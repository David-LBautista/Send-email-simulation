// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const formularioEnviar = document.getElementById('enviar-mail');
const btnEnviar = document.getElementById('enviar');
const resetBtn = document.getElementById('resetBtn');





// event listeners
eventListeners();

function eventListeners(){

    //inicio de la aplicacion y deshabilitar el boton de enviar
    document.addEventListener('DOMContentLoaded', inicioApp);

    //campos del formulario (validacion)
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Boton de enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);

    //resetear el formulario
    resetBtn.addEventListener('click', resetearFormulario);
    
}




//functions
function inicioApp(){
    //deshabilitar el envio
    btnEnviar.disabled = true;
}

//valida que el campo tenga algo escrito
function validarCampo(){
    
    //se valida la longitud del texto y que no este vacío
    validarLongitud(this);

    //validar unicamente el email
    if(this.type === 'email'){
        validarEmail(this);
    }


    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    }
}

function resetearFormulario(e){
    formularioEnviar.reset();

    e.preventDefault();
}

//enviar email
function enviarEmail(e){
    //al presionar enviar spinner
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //gif que envia el email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //ocultar spinner y mostrar gif de enviado
    setTimeout( function() {
        //ocultamos el gif de spinner a los 3 seg
        spinnerGif.style.display = 'none';

        //metemos el elemento creado llamado enviado
        document.querySelector('#loaders').appendChild(enviado);

        setTimeout( function() {
            enviado.remove();
            formularioEnviar.reset();
        }, 6000);


    }, 3000);

    e.preventDefault();
}

// verifica la longitud del texto en los campos
function validarLongitud(campo){

    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    const mensaje = campo.value;

    if(mensaje.indexOf('@') !== -1 ){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }

}

