const cipher = {
  // Código de cifrado y descifrado

  //Checklist
  //1. Obtener las letras del mensaje como un string [YA]
  //2. Obtener el número de posición de cada elemento de ese string [YA]
  //comparándolo con el string alfabeto
  //3. Sumarle a esa posición el número de desplazamiento (offset) [YA]
  //4. Generar un nuevo string con la posición nueva
  //5. Convertir el arreglo encriptado a una cadena/string

  encode(mensaje, desplazamiento) {

    const encrypt = (char) =>
      String.fromCharCode((char.charCodeAt() - 65 + desplazamiento) % 26 + 65);

    const encryptMessage = (mensaje) =>
      mensaje.split('').map((el) =>
        encrypt(el));

    //Enviar error si no ingresa un mensaje a cifrar o descifrar (string)
    if (mensaje == []) {
      throw new TypeError("Debes ingresar un número clave");

      console.log(mensaje);

      //Variables

      //Variable para obtener el ASCII del string mensaje y después desplazarlo 
      // con el offset ingresado en el input


      //Regresar el arreglo a una cadena

    }

  },
  decode(mensaje, desplazamiento) {
    console.log(mensaje);
   
    const encrypt = (char) =>
    String.fromCharCode((char.charCodeAt() - 65 - desplazamiento) % 26 + 65);

  const encryptMessage = (mensaje) =>
    mensaje.split('').map((el) =>
      encrypt(el));

  },

  export default cipher;


  //Funciones

  //Fórmula Michelle
  //(x-65+n)%26+65
  // let 

  //"a".charCodeAt()
  //"Z".charCodeAt
  //"A".charCodeAt()
  //("A".charCodeAt()-65+3)%26+65

  //encode(mensaje,desplazamiento){

  //const encrypt = (char)=>
  // String.fromCharCode((char.charCodeAt()-65+3)%26+65);

  //const encryptMessage = (mensaje) => 
  //mensaje.split('').map((el) => 
  //encrypt (el));








}
  //Probar switch para insertar el valor de desplazamiento
