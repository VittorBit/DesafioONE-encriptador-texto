
// Botones de encriptar y desencriptar //
let botonencriptar = document.querySelector(".boton-encriptar");
let botondesencriptar = document.querySelector(".boton-desencriptar");

// Ocultar mensaje e imagen principal del encriptador de texto //
let imagenprincipal = document.querySelector(".imagen-encriptador");
let mensajetextoPrincipal = document.querySelector(".mensaje-encriptado");

// Mostrar el boton copiar y el texto copiar del mensaje e imagen
// principal del encriptador de texto //
let mostrarbotoncopiar= document.querySelector(".ventana-copiar");
let mostrartexto = document.querySelector(".ventana-resultado");

// Resultado de ingresar texto // 
let resultadofinal = document.querySelector(".copiar-texto");

function botonEncriptar(){ // BOTON ENCRIPTAR //
  
  let cajatexto = recuperarTexto();
  resultadofinal.textContent = encriptarTexto(cajatexto);

  if (cajatexto.length != 0) {
    mostrarAtras();
    ocultarAdelante()
  } else {
    alert("Por favor debe de ingresar un texto");
    imagenencriptador.src = "./imagenes/FondoDePersona-Listo.png"
    titulomensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    
  }

}

function botonDesencriptar(){ // BOTON DESENCRIPTAR //
  
  let cajatexto = recuperarTexto()
  resultadofinal.textContent = desencriptarTexto(cajatexto);

  if (cajatexto.length != 0) {
    mostrarAtras();
    ocultarAdelante()
  } else {
    alert("Por favor debe de ingresar un texto");
    imagenencriptador.src = "./imagenes/FondoDePersona-Listo.png"
    titulomensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  }

}


function recuperarTexto(){
  // Sirve para ingresar el texto en la caja de textarea //
  let cajatexto = document.querySelector(".caja")
  return cajatexto.value
}

function mostrarAtras(){
  document.querySelector(".ventana-copiar").style.display ="block";
  document.querySelector(".ventana-resultado").style.display ="block";
}

function ocultarAdelante(){
  imagenprincipal.classList.add("ocultar");
  mensajetextoPrincipal.classList.add("ocultar");
}

function encriptarTexto(mensajeTexto){

    let textoCifrado = mensajeTexto;
    let textoFinal = "";

    for(let i = 0; i < textoCifrado.length; i++){
      if(textoCifrado[i] == "a"){
          textoFinal = textoFinal + "ai"
      }
      else if(textoCifrado[i] == "e"){
          textoFinal = textoFinal + "enter"
      }
      else if(textoCifrado[i] == "i"){
          textoFinal = textoFinal + "imes"
      }
      else if(textoCifrado[i] == "o"){
          textoFinal = textoFinal + "ober"
      }
      else if(textoCifrado[i] == "u"){
          textoFinal = textoFinal + "ufat"
      }
      else{
          textoFinal = textoFinal + textoCifrado[i]
      }
    }
    return textoFinal
  }

  function desencriptarTexto(mensajeTexto){

    let textoDecifrado = mensajeTexto;
    let textoFinal = "";

    for(let i = 0; i < textoDecifrado.length; i++){
      if(textoDecifrado[i] == "a"){
          textoFinal = textoFinal + "a"
      }
      else if(textoDecifrado[i] == "e"){
          textoFinal = textoFinal + "e"
      }
      else if(textoDecifrado[i] == "i"){
          textoFinal = textoFinal + "i"
      }
      else if(textoDecifrado[i] == "o"){
          textoFinal = textoFinal + "o"
      }
      
      else if(textoDecifrado[i] == "u"){
          textoFinal = textoFinal + "u"
      }
      else{
          textoFinal = textoFinal + textoDecifrado[i];
      }
    }
    return textoFinal;
  }

  function botonCopiar(){ // BOTON COPIAR //

    const botoncopiar = document.querySelector(".boton-copiar"); 
    
    botoncopiar.addEventListener("click", copiar = () => {
      let ingresartexto = document.querySelector(".copiar-texto").textContent;
      navigator.clipboard.writeText(ingresartexto);
    });
  
  }