const cipher = {

  // -- ENCODE --
  encode: function (desplazamiento, mensaje) {
    //Enviar error si no ingresa un mensaje a cifrar o descifrar (string) o desplazamiento (offset)
    if (desplazamiento === null || mensaje === null) {
      throw TypeError("Ingresa la información solicitada");
    }
    if (desplazamiento === 0 || mensaje === typeof 0){
    throw TypeError("Ingresa la información solicitada");}
    //Variable de encriptado
    const encrypt = (char) => {
      //ORIGINAL 
      return String.fromCharCode((char.charCodeAt() - 65 + parseInt(desplazamiento)) % 26 + 65); // Solo esta línea no funciona !!!
    }
    let mensajeEnArray = mensaje.split("");
    let mensajeCodifEnArray = mensajeEnArray.map((el) => {
      return encrypt(el);
    })
    return mensajeCodifEnArray.join("");


    //CON CONDICIONALES
    //  if (char.charCodeAt() >= 65 || char.charCodeAt() <= 90) {
    //     return String.fromCharCode((char.charCodeAt() - 65 + parseInt(desplazamiento)) % 26 + 65);
    //  } else {
    //    return String.fromCharCode(char.charCodeAt());
    //  }
    // }
    // let mensajeEnArray = mensaje.split("");
    // let mensajeCodifEnArray = mensajeEnArray.map((el) => {
    //   return encrypt(el);
    // })
    //return mensajeCodifEnArray.join("");
  },

  // -- DECODE --
  decode: function (desplazamiento, mensaje) {
    //Mensaje de error si no hay offset o mensaje
    if (desplazamiento === null || mensaje === null) {
      throw TypeError("Ingresa la información solicitada");
    }
    if (desplazamiento === 0 || mensaje === typeof 0){
    throw TypeError("Ingresa la información solicitada");
  }

    const encrypt = (char) => {

      //CON CONDICIONALES 
      // if (char.charCodeAt()>=65||char.charCodeAt()<=90) {
      // return String.fromCharCode((char.charCodeAt() - 65 - parseInt(desplazamiento)) % 26 + 65);
      // }
      // else {
      //   return String.fromCharCode(char.charCodeAt());
      //   }}
      //let mensajeEnArray = mensaje.split("");
      // let mensajeCodifEnArray = mensajeEnArray.map((el) => {
      //  return encrypt(el);
      // })
      // return mensajeCodifEnArray.join("");

      //ORIGINAL
      console.log("encrypt" + String.fromCharCode((char.charCodeAt() - 65 - desplazamiento) % 26 + 65));
      return String.fromCharCode((char.charCodeAt() - 65 - parseInt(desplazamiento)) % 26 + 65);
    }
    let arrayDelMensaje = mensaje.split("");
    console.log("array descifrado" + arrayDelMensaje);
    let mensajeFinal = arrayDelMensaje.map((el) => {
      return encrypt(el);
    })
    return mensajeFinal.join("");
  }

}

export default cipher;


