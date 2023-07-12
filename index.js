let puntosusuario= 0;
let puntosPC= 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPuntos = document.querySelector("#gana-punto");
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora")
let elegiTuArma = document.querySelector("#elegi-tu-arma");


let botonesArmas= document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
})

function iniciarTurno(e) {
  let eleccionPC = Math.floor (Math.random()*3);
  let eleccionUsuario = e.currentTarget.id;
  
  if (eleccionPC === 0) {
    eleccionPC = "piedra🪨"
}else if (eleccionPC === 1) {
    eleccionPC = "papel📄"
}else 
    eleccionPC = "tijera✂️"


if (
    (eleccionUsuario === "piedra🪨" && eleccionPC === "tijera✂️")||
    (eleccionUsuario === "tijera✂️" && eleccionPC === "papel📄") ||
    (eleccionUsuario === "papel📄" && eleccionPC === "piedra🪨"))
   {
    ganaUsuario();
}
else if (  
(eleccionPC === "piedra🪨" && eleccionUsuario === "tijera✂️")||
(eleccionPC === "tijera✂️" && eleccionUsuario === "papel📄") ||
(eleccionPC === "papel📄" && eleccionUsuario === "piedra🪨"))

{ganaPC();
}  else {
    empate();
    }
mensaje.classList.remove("disabled");
contenedorEleccionUsuario.innerText = eleccionUsuario;
contenedorEleccionPC.innerText = eleccionPC;

if (puntosusuario === 5 || puntospc === 5) {
    if (puntosusuario === 5) {
        instrucciones.innerText = "GANASTE EL JUEGO 🔥"
        }if (puntosPC === 5) {
            instrucciones.innerText = "La pc gano el juego 😥"
            
        }
    elegiTuArma.classList.add("disabled");
    reiniciar.classList.remove("disabled");
    reiniciar.addEventListener("click", reiniciarJuego);
}


}

function ganaUsuario () {
    puntosusuario++;
    contenedorPuntosUsuario.innerText = puntosusuario;
    contenedorGanaPuntos.innerText ="Ganaste un punto!🔥"
    
}

function ganaPC () {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPuntos.innerText ="La compu gano un punto!😥"
}

function empate () {
    contenedorGanaPuntos.innerText ="Empate! 😒"
}


function reiniciarJuego() {
    reiniciar.classList.add("disabled"),
    elegiTuArma.classList.remove("disabled"),
    mensaje.classList.add("disabled")
    puntosusuario = 0
    puntosPC= 0

    contenedorPuntosUsuario.innerText = puntosusuario
    contenedorPuntosPC.innerText = puntosPC
    instrucciones.innetText= "El primero que suma 5 puntos Gana!"
    
}