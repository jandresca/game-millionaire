//opciones
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");

let a2 = document.getElementById("a2");
let b2 = document.getElementById("b2");
let c2= document.getElementById("c2");
let d2 = document.getElementById("d2");
//puntos
let puntos = document.getElementById("puntos");
//preguntas
let pregunta1 = document.getElementById("pregunta1");
let pregunta2 = document.getElementById("pregunta2");
let pregunta3 = document.getElementById("pregunta3");
/*
let pregunta4 = document.getElementById("pregunta4");
let pregunta5 = document.getElementById("pregunta5");
let pregunta6 = document.getElementById("pregunta6");
let pregunta7 = document.getElementById("pregunta7");
let pregunta8 = document.getElementById("pregunta8");
let pregunta9 = document.getElementById("pregunta9");
let pregunta10 = document.getElementById("pregunta10");*/
//inicializo las preguntas en estado none para que no se vean 
pregunta2.style.display = "none";
pregunta3.style.display = "none";
/*pregunta4.style.display = "none";
pregunta5.style.display = "none";
pregunta6.style.display = "none";
pregunta7.style.display = "none";
pregunta8.style.display = "none";
pregunta9.style.display = "none";
pregunta10.style.display = "none";*/

  
const f = ()=>{
 let pregunta=prompt("Estas seguro que esta es la respuesta\n (solo si o no)");
 let p= pregunta.toLowerCase();
 p==="si"? alert("lo siento pero esta no es la respuesta adecuada"): alert("Gracias por participar");
}

const emergente = () => {
  let correcta1 = prompt("Estas seguro que esta es la respuesta\n (solo si o no)");
  correcta = correcta1.toLowerCase();
  if (correcta === "si") alert("perfecto esta es la adecuada");
};


//pregunta 1
a.onclick = function () {
  emergente();
  puntos.innerHTML="1000";
  pregunta2.style.display = "block";
  pregunta1.style.display = "none";
};

b.onclick = function () {
  f();
};

c.onclick = function () {
  f();
};

d.onclick = function () {
  f();
};

//pregunta 2
a2.onclick = function () {
  emergente();
  puntos.innerHTML="2000";
  pregunta3.style.display = "block";
  pregunta1.style.display = "none";
  pregunta2.style.display = "none";
};

b2.onclick = function () {
  puntos.innerHTML="";
  f();
};

c2.onclick = function () {
  puntos.innerHTML="";
  f();
};

d2.onclick = function () {
  puntos.innerHTML="";
  f();
};

