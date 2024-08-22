const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

//-------Boton de Encriptar-------//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

//-------Boton de Desencriptar-------//
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

//-------Boton de Copiar-------//
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
});

document.querySelector('.btn-encriptar').addEventListener('click', function() {
    var texto = document.querySelector('.encriptar').value;
    
    // Expresión regular para verificar si hay mayúsculas o acentos
    var tieneMayusculasOAcentos = /[A-ZÁÉÍÓÚáéíóú]/.test(texto);

    if (tieneMayusculasOAcentos) {
        // Mostrar el modal con el mensaje de error
        var errorModal = document.getElementById("mensaje-error-modal");
        errorModal.style.display = "block";

        // Cerrar el modal de error al presionar la "X"
        document.getElementById("close-error-modal").onclick = function() {
            errorModal.style.display = "none";
        };

        // Cerrar el modal de error al hacer clic fuera del contenido
        window.onclick = function(event) {
            if (event.target == errorModal) {
                errorModal.style.display = "none";
            }
        };
    } else {
        // Mostrar el modal con el mensaje de éxito
        var exitoModal = document.getElementById("mensaje-exito-modal");
        exitoModal.style.display = "block";

        // Cerrar el modal de éxito al presionar la "X"
        document.getElementById("close-exito-modal").onclick = function() {
            exitoModal.style.display = "none";
        };

        // Cerrar el modal de éxito al hacer clic fuera del contenido
        window.onclick = function(event) {
            if (event.target == exitoModal) {
                exitoModal.style.display = "none";
            }
        };

        // Aquí puedes agregar el código para encriptar el texto correctamente
    }
});

document.querySelector('.btn-desencriptar').addEventListener('click', function() {
    // Aquí iría el código para desencriptar el texto
    var exitoModal = document.getElementById("mensaje-desencriptado-modal");
    exitoModal.style.display = "block";

    // Cerrar el modal al presionar la "X"
    document.getElementById("close-desencriptado-modal").onclick = function() {
        exitoModal.style.display = "none";
    };

    // Cerrar el modal al hacer clic fuera del contenido
    window.onclick = function(event) {
        if (event.target == exitoModal) {
            exitoModal.style.display = "none";
        }
    };
});


