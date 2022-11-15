const cipher = {
  
    // Enviar error si no ingresa un número de desplazamiento
    
  
  
  
  // Código de cifrado y descifrado

  // if (desplazamiento == null || mensaje == []) {
     // throw new TypeError("¡Error! Escribe un mensaje y elige el número de desplazamiento"); }

    //Enviar error si no ingresa un mensaje a cifrar o descifrar (string)
   // if (mensaje == []) {
     // throw new TypeError("Debes ingresar un mensaje"); }
      //Enviar error si no ingresa un número de desplazamiento
   //if (desplazamiento == null) {
       //throw new TypeError("Debes ingresar un número clave"); 
      // }

  encode: function (mensaje, desplazamiento) {

    if (desplazamiento == null || mensaje==[]) {
      throw TypeError("Ingresa la información solicitada"); 
       }

    console.log(mensaje, desplazamiento)
    const encrypt = (char) => {
      return String.fromCharCode((char.charCodeAt() - 65 + parseInt(desplazamiento)) % 26 + 65); // Solo esta línea no funciona !!!
    }
    let mensajeEnArray = mensaje.split("");
    let mensajeCodifEnArray = mensajeEnArray.map((el) => {
      return encrypt(el);
    })

    console.log("resultadoFinal" + mensajeCodifEnArray.join(""));
    return mensajeCodifEnArray.join("");
    
    //Variable para obtener el ASCII del string mensaje y después desplazarlo 
    // con el offset ingresado en el input

    //Regresar el arreglo a una cadena
  },

  decode: function (mensaje, desplazamiento) {
    if (desplazamiento == null || mensaje==[]) {
      throw TypeError("Ingresa la información solicitada"); 
       }
       
    const encrypt = (char) => {
      console.log("encrypt" + String.fromCharCode((char.charCodeAt() - 65 - desplazamiento) % 26 + 65));
      return String.fromCharCode((char.charCodeAt() - 65 - parseInt(desplazamiento)) % 26 + 65);

    }
    let arrayDelMensaje = mensaje.split("");
    console.log("array descifrado" + arrayDelMensaje);
    let mensajeFinal = arrayDelMensaje.map((el) => {
      return encrypt(el);
    })
    console.log ("mensaje descifrado" + mensajeFinal.join (""));
    return mensajeFinal.join("");
  }

}
    //Enviar error si no ingresa un mensaje a cifrar o descifrar (string)
    //if (mensaje == []) {
     // throw new TypeError("Debes ingresar un mensaje"); 
    //}
   
export default cipher;


 