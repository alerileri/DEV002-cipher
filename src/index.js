// 1. IMPORTACIÓN DE MÓDULOS
//Importación del módulo de cifrado y descifrado
import cipher from './cipher.js';

// 2. DECLARACIÓN DE VARIABLES

// Variable del texto que se ingrese en la caja de texto
let mensaje = document.getElementByID("mensaje");
// Variable del botón descifrar
let descifrar = document.getElementById("descifrar");
// Variable del botón cifrar
let cifrar = document.getElementById("cifrar");
// variable input de números / desplazamiento
let numeroClave = document.getElementById("numeroClave");


// 3. DECLARACIÓN DE FUNCIONES / EJECUCIÓN DEL CÓDIGO
//Función para elegir entre cifrar y descifrar; usar el módulo cipher
//Función para que devuelva el mensaje
cifrar.addEventListener("click", function () {
    let valueMessage = mensaje.value;
    let valueOffset = numeroClave.value;
    let textEncode = cipher.encode(valueMessage, valueOffset)
    console.log(textEncode)
});