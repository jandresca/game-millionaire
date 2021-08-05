const letsPlayAudio = document.getElementById("lets-play");
const easyAudio = document.getElementById("easy");
const wrongAnswerAudio = document.getElementById("wrong-answer");
const correctAnswerAudio = document.getElementById("correct-answer");


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

let a5 = document.getElementById("a5");
let b5 = document.getElementById("b5");
let c5 = document.getElementById("c5");
let d5 = document.getElementById("d5");

let a6 = document.getElementById("a6");
let b6 = document.getElementById("b6");
let c6 = document.getElementById("c6");
let d6 = document.getElementById("d6");

let a7 = document.getElementById("a7");
let b7 = document.getElementById("b7");
let c7 = document.getElementById("c7");
let d7 = document.getElementById("d7");

let a8 = document.getElementById("a8");
let b8 = document.getElementById("b8");
let c8 = document.getElementById("c8");
let d8 = document.getElementById("d8");

let a9 = document.getElementById("a9");
let b9 = document.getElementById("b9");
let c9 = document.getElementById("c9");
let d9 = document.getElementById("d9");

let a10 = document.getElementById("a10");
let b10 = document.getElementById("b10");
let c10 = document.getElementById("c10");
let d10 = document.getElementById("d10");

let a11 = document.getElementById("a11");
let b11 = document.getElementById("b11");
let c11 = document.getElementById("c11");
let d11 = document.getElementById("d11");

let a12 = document.getElementById("a12");
let b12 = document.getElementById("b12");
let c12 = document.getElementById("c12");
let d12 = document.getElementById("d12");
//puntos
let puntos = document.getElementById("puntos");
let ganados = document.getElementById("ganados");
//array
let puntuacion = [
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 15000, 21000,
  28000, 36000, 45000, 55000, 66000, 78000, 0, 11000, 12000,
];
//preguntas
let pregunta1 = document.getElementById("pregunta1");
let pregunta2 = document.getElementById("pregunta2");
let pregunta3 = document.getElementById("pregunta3");
let pregunta4 = document.getElementById("pregunta4");
let pregunta5 = document.getElementById("pregunta5");
let pregunta6 = document.getElementById("pregunta6");
let pregunta7 = document.getElementById("pregunta7");
let pregunta8 = document.getElementById("pregunta8");
let pregunta9 = document.getElementById("pregunta9");
let pregunta10 = document.getElementById("pregunta10");
let pregunta11 = document.getElementById("pregunta11");
let pregunta12 = document.getElementById("pregunta12");
let final = document.getElementById("final");
let nombre1 = document.getElementById("nombre1");
let start = document.getElementById("start");

//inicializo las preguntas en estado none para que no se vean
pregunta1.style.display = "none";
pregunta2.style.display = "none";
pregunta3.style.display = "none";
pregunta4.style.display = "none";
pregunta5.style.display = "none";
pregunta6.style.display = "none";
pregunta7.style.display = "none";
pregunta8.style.display = "none";
pregunta9.style.display = "none";
pregunta10.style.display = "none";
pregunta11.style.display = "none";
pregunta12.style.display = "none";
final.style.display = "none";
nombre1.style.display = "none";

let fnStart = () => {
  start.style.display = "none";
  easyAudio.play();
  easyAudio.volume = 0.3;
  let nombre = prompt(
    "Bienvenido al juego quien quiere ser millonario por favor ingrese su nombre: "
  );
  while (nombre == null || nombre === "") {
    alert(
      "por favor ingresar el nombre para poder iniciar con el cuestionario"
    );
    nombre = prompt(
      "Bienvenido al juego quien quiere ser millonario por favor ingrese su nombre: "
    );
  }

  pregunta1.style.display = "block";
  const f = () => {
    // start audio
    easyAudio.pause();
    letsPlayAudio.play();
    letsPlayAudio.volume = 0.3;
    let pregunta = prompt(
      "Estas seguro que esta es la respuesta\n (solo si o no)"
    );

    while (pregunta !== "si" && pregunta !== "no") {
      alert("por favor escriba si o no");
      pregunta = prompt(
        "Estas seguro que esta es la respuesta\n (solo si o no)"
      );
    }
    wrongAnswerAudio.play();
    wrongAnswerAudio.volume = 0.3;
    easyAudio.play();
    return pregunta;
  };

  const emergente = () => {
    // start audio
    easyAudio.pause();
    letsPlayAudio.play();
    letsPlayAudio.volume = 0.3;

    let pregunta = prompt(
      "Estas seguro que esta es la respuesta\n (solo si o no)"
    );
    while (pregunta !== "si" && pregunta !== "no") {
      alert("por favor escriba si o no");
      pregunta = prompt(
        "Estas seguro que esta es la respuesta\n (solo si o no)"
      );
    }
    correctAnswerAudio.play();
    correctAnswerAudio.volume = 0.3;
    easyAudio.play();
    correcta = pregunta.toLowerCase();

    return correcta;
  };

  ganados.innerHTML = puntuacion[0];
  puntos.innerHTML = puntuacion[18];
  //pregunta 1
  a.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[0]),
        (ganados.innerHTML = puntuacion[1]),
        (pregunta2.style.display = "block"),
        (pregunta1.style.display = "none");
  };

  b.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[18] +
              " puntos"
          ) + location.reload())
      : "";
  };

  c.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[18] +
              " puntos"
          ) + location.reload())
      : "";
  };

  d.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[18] +
              " puntos"
          ) + location.reload())
      : "";
  };

  //pregunta 2
  a2.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[2]),
        (ganados.innerHTML = puntuacion[2]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "block"));
  };

  b2.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[0] +
              " puntos"
          ) + location.reload())
      : "";
  };

  c2.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[0] +
              " puntos"
          ) + location.reload())
      : "";
  };

  d2.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[0] +
              " puntos"
          ) + location.reload())
      : "";
  };

  //pregunta 3
  a3.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[2] +
              " puntos"
          ) + location.reload())
      : "";
  };

  b3.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[2] +
              " puntos"
          ) + location.reload())
      : "";
  };

  c3.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[2] +
              " puntos"
          ) + location.reload())
      : "";
  };

  d3.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[5]),
        (ganados.innerHTML = puntuacion[3]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "block"));
  };

  //pregunta 4
  a4.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[5] +
              " puntos"
          ) + location.reload())
      : "";
  };

  b4.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[5] +
              " puntos"
          ) + location.reload())
      : "";
  };

  c4.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[9]),
        (ganados.innerHTML = puntuacion[4]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "block"));
  };

  d4.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[5] +
              " puntos"
          ) + location.reload())
      : "";
  };

  //pregunta 5
  a5.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[9] +
              " puntos"
          ) + location.reload())
      : "";
  };

  b5.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[10]),
        (ganados.innerHTML = puntuacion[5]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "block"));
  };

  c5.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[9] +
              " puntos"
          ) + location.reload())
      : "";
  };

  d5.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[9] +
              " puntos"
          ) + location.reload())
      : "";
  };

  //pregunta 6
  a6.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[10] +
              " puntos"
          ) + location.reload())
      : "";
  };

  b6.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[10] +
              " puntos"
          ) + location.reload())
      : "";
  };

  c6.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[11]),
        (ganados.innerHTML = puntuacion[6]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "block"));
  };

  d6.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[10] +
              " puntos"
          ) + location.reload())
      : "";
  };

  //pregunta 7
  a7.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[11] +
              " puntos"
          ) + location.reload())
      : "";
  };

  b7.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[11] +
              " puntos"
          ) + location.reload())
      : "";
  };

  c7.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[12]),
        (ganados.innerHTML = puntuacion[7]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "none"),
        (pregunta8.style.display = "block"));
  };

  d7.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[11] +
              " puntos"
          ) + location.reload())
      : "";
  };

  //pregunta 8
  a8.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[12] +
              " puntos"
          ) + location.reload())
      : "";
  };

  b8.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[12] +
              " puntos"
          ) + location.reload())
      : "";
  };

  c8.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[12] +
              " puntos"
          ) + location.reload())
      : "";
  };

  d8.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[13]),
        (ganados.innerHTML = puntuacion[8]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "none"),
        (pregunta8.style.display = "none"),
        (pregunta9.style.display = "block"));
  };

  //pregunta 9
  a9.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[14]),
        (ganados.innerHTML = puntuacion[9]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "none"),
        (pregunta8.style.display = "none"),
        (pregunta9.style.display = "none"),
        (pregunta10.style.display = "block"));
  };

  b9.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[13] +
              " puntos"
          ) + location.reload())
      : "";
  };

  c9.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[13] +
              " puntos"
          ) + location.reload())
      : "";
  };

  d9.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[13] +
              " puntos"
          ) + location.reload())
      : "";
  };

  //pregunta 10
  a10.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[14] +
              " puntos"
          ) + location.reload())
      : "";
  };

  b10.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[15]),
        (ganados.innerHTML = puntuacion[19]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "none"),
        (pregunta8.style.display = "none"),
        (pregunta9.style.display = "none"),
        (pregunta10.style.display = "none"),
        (pregunta11.style.display = "block"));
  };

  c10.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[14] +
              " puntos"
          ) + location.reload())
      : "";
  };

  d10.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[14] +
              " puntos"
          ) + location.reload())
      : "";
  };

  //pregunta 11
  a11.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[15] +
              " puntos"
          ) + location.reload())
      : "";
  };

  b11.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[15] +
              " puntos"
          ) + location.reload())
      : "";
  };

  c11.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[15] +
              " puntos"
          ) + location.reload())
      : "";
  };

  d11.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[16]),
        (ganados.innerHTML = puntuacion[20]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "none"),
        (pregunta8.style.display = "none"),
        (pregunta9.style.display = "none"),
        (pregunta10.style.display = "none"),
        (pregunta11.style.display = "none"),
        (pregunta12.style.display = "block"));
  };

  //pregunta 12
  a12.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[16] +
              " puntos"
          ) + location.reload())
      : "";
  };

  b12.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[16] +
              " puntos"
          ) + location.reload())
      : "";
  };

  c12.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[17]),
        (nombre1.innerHTML = "<b>" + nombre + "</b>"),
        (nombre1.style.display = "block"),
        (final.style.display = "block"),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "none"),
        (pregunta8.style.display = "none"),
        (pregunta9.style.display = "none"),
        (pregunta10.style.display = "none"),
        (pregunta11.style.display = "none"),
        (pregunta12.style.display = "none"));
  };

  d12.onclick = function () {
    pregunta = f();
    pregunta === "si"
      ? (ganados.innerHTML =
          alert(
            "lo siento " +
              nombre +
              " perdiste y quedaste con " +
              puntuacion[16] +
              " puntos"
          ) + location.reload())
      : "";
  };
};

start.onclick = function () {
  fnStart();
};
