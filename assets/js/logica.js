//opciones
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");

let a2 = document.getElementById("a2");
let b2 = document.getElementById("b2");
let c2 = document.getElementById("c2");
let d2 = document.getElementById("d2");

let a3 = document.getElementById("a3");
let b3 = document.getElementById("b3");
let c3 = document.getElementById("c3");
let d3 = document.getElementById("d3");

let a4 = document.getElementById("a4");
let b4 = document.getElementById("b4");
let c4 = document.getElementById("c4");
let d4 = document.getElementById("d4");
<<<<<<< HEAD
=======

let a5 = document.getElementById("a5");
let b5 = document.getElementById("b5");
let c5 = document.getElementById("c5");
let d5 = document.getElementById("d5");

let a6 = document.getElementById("a6");
let b6 = document.getElementById("b6");
let c6 = document.getElementById("c6");
let d6 = document.getElementById("d6");

>>>>>>> jaime
//puntos
let puntos = document.getElementById("puntos");
let ganados = document.getElementById("ganados");
//array
let puntuacion = [
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 15000, 21000,
  28000, 36000, 45000, 55000,0
];
//preguntas
let pregunta1 = document.getElementById("pregunta1");
let pregunta2 = document.getElementById("pregunta2");
let pregunta3 = document.getElementById("pregunta3");
let pregunta4 = document.getElementById("pregunta4");
<<<<<<< HEAD
/*
let pregunta5 = document.getElementById("pregunta5");
let pregunta6 = document.getElementById("pregunta6");
=======
let pregunta5 = document.getElementById("pregunta5");
let pregunta6 = document.getElementById("pregunta6");
/*
>>>>>>> jaime
let pregunta7 = document.getElementById("pregunta7");
let pregunta8 = document.getElementById("pregunta8");
let pregunta9 = document.getElementById("pregunta9");
let pregunta10 = document.getElementById("pregunta10");*/
//inicializo las preguntas en estado none para que no se vean
pregunta2.style.display = "none";
pregunta3.style.display = "none";
pregunta4.style.display = "none";
<<<<<<< HEAD
/*
pregunta5.style.display = "none";
pregunta6.style.display = "none";
=======
pregunta5.style.display = "none";
pregunta6.style.display = "none";
/*
>>>>>>> jaime
pregunta7.style.display = "none";
pregunta8.style.display = "none";
pregunta9.style.display = "none";
pregunta10.style.display = "none";*/

const f = () => {
  let pregunta = prompt(
    "Estas seguro que esta es la respuesta\n (solo si o no)"
  );

  while (pregunta !== "si" && pregunta !== "no") {
    alert("por favor escriba si o no");
    pregunta = prompt("Estas seguro que esta es la respuesta\n (solo si o no)");
  }
  return pregunta;
};

const emergente = () => {
  let correcta1 = prompt(
    "Estas seguro que esta es la respuesta\n (solo si o no)"
  );
  correcta = correcta1.toLowerCase();
  if (correcta === "si") alert("perfecto esta es la adecuada");
};

ganados.innerHTML = puntuacion[0];
puntos.innerHTML = "0";
//pregunta 1
a.onclick = function () {
  emergente();
  puntos.innerHTML = puntuacion[0];
  ganados.innerHTML = puntuacion[1];
  console.log(puntuacion);
  pregunta2.style.display = "block";
  pregunta1.style.display = "none";
};

b.onclick = function () {
  pregunta = f();
  pregunta === "si"
    ? (ganados.innerHTML = puntuacion[16] + location.reload())
    : "";
};

c.onclick = function () {
  pregunta = f();
  pregunta === "si"
    ? (ganados.innerHTML = puntuacion[16] + location.reload())
    : "";
};

d.onclick = function () {
  pregunta = f();
  pregunta === "si"
    ? (ganados.innerHTML = puntuacion[16] + location.reload())
    : "";
};

//pregunta 2
a2.onclick = function () {
  emergente();
  puntos.innerHTML = puntuacion[0 + 2];
  ganados.innerHTML = puntuacion[2];
  pregunta3.style.display = "block";
  pregunta1.style.display = "none";
  pregunta2.style.display = "none";
};

b2.onclick = function () {
  pregunta = f();
  alert("lo siento perdiste y quedaste con "+puntuacion[0]);
  pregunta === "si"
    ? (ganados.innerHTML = puntuacion[1] + location.reload())
    : "";
};

c2.onclick = function () {
  pregunta = f();
  alert("lo siento perdiste y quedaste con "+puntuacion[0]);
  pregunta === "si"
    ? (ganados.innerHTML = puntuacion[1] + location.reload())
    : "";
};

d2.onclick = function () {
  pregunta = f();
  alert("lo siento perdiste y quedaste con "+puntuacion[0]);
  pregunta === "si"
    ? (ganados.innerHTML = puntuacion[1] + location.reload())
    : "";
};

//pregunta 3
a3.onclick = function () {
  pregunta = f();
  alert("lo siento perdiste y quedaste con "+puntuacion[2]);
  pregunta === "si"
    ? (ganados.innerHTML = puntuacion[0+2] + location.reload())
    : "";
};

b3.onclick = function () {
  pregunta = f();
  alert("lo siento perdiste y quedaste con "+puntuacion[2]);
  pregunta === "si"
    ? (ganados.innerHTML = puntuacion[0+2] + location.reload())
    : "";
};

c3.onclick = function () {
  pregunta = f();
  alert("lo siento perdiste y quedaste con "+puntuacion[2]);
  pregunta === "si"
    ? (ganados.innerHTML = puntuacion[0+2] + location.reload())
    : "";
};

d3.onclick = function () {
  emergente();
  puntos.innerHTML = puntuacion[5];
  ganados.innerHTML = puntuacion[3];
  pregunta4.style.display = "block";
  pregunta1.style.display = "none";
  pregunta2.style.display = "none";
  pregunta3.style.display = "none";
};

//pregunta 4
a4.onclick = function () {
  pregunta = f();
  alert("lo siento perdiste y quedaste con "+puntuacion[5]);
  pregunta === "si"
    ? (ganados.innerHTML = puntuacion[5] + location.reload())
    : "";
};

b4.onclick = function () {
  pregunta = f();
  alert("lo siento perdiste y quedaste con "+puntuacion[5]);
  pregunta === "si"
    ? (ganados.innerHTML = puntuacion[5] + location.reload())
    : "";
};

c4.onclick = function () {
  emergente();
  puntos.innerHTML = puntuacion[9];
  ganados.innerHTML = puntuacion[4];
  pregunta5.style.display = "block";
  pregunta1.style.display = "none";
  pregunta2.style.display = "none";
  pregunta3.style.display = "none";
  pregunta4.style.display = "none";
};

d4.onclick = function () {
  alert("lo siento perdiste y quedaste con "+puntuacion[5]);
  pregunta = f();
  pregunta === "si"
    ? (ganados.innerHTML = puntuacion[5] + location.reload())
    : "";
};
<<<<<<< HEAD
=======

//pregunta 5
a5.onclick = function () {
  puntos.innerHTML = puntuacion[9];
  f();
  location.reload();
};

b5.onclick = function () {
  puntos.innerHTML = puntuacion[9];
  f();
  location.reload();
};

c5.onclick = function () {
  emergente();
  puntos.innerHTML = puntuacion[10];
  ganados.innerHTML = puntuacion[5];
  pregunta6.style.display = "block";
  pregunta1.style.display = "none";
  pregunta2.style.display = "none";
  pregunta3.style.display = "none";
  pregunta4.style.display = "none";
  pregunta5.style.display = "none";
};

d5.onclick = function () {
  puntos.innerHTML = puntuacion[9];
  f();
  location.reload();
};

//pregunta 6
a6.onclick = function () {
  puntos.innerHTML = puntuacion[10];
  f();
  location.reload();
};

b6.onclick = function () {
  puntos.innerHTML = puntuacion[10];
  f();
  location.reload();
};

c6.onclick = function () {
  puntos.innerHTML = puntuacion[10];
  f();
  location.reload();
  
};

d6.onclick = function () {
  emergente();
  puntos.innerHTML = puntuacion[11];
  ganados.innerHTML = puntuacion[6];
  pregunta7.style.display = "block";
  pregunta1.style.display = "none";
  pregunta2.style.display = "none";
  pregunta3.style.display = "none";
  pregunta4.style.display = "none";
  pregunta5.style.display = "none";
  pregunta6.style.display = "none";
};

>>>>>>> jaime
