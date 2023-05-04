let min = 1;
let max = 100;
let intentos = 0;
let numero = Math.floor((min + max) / 2);

function adivinen() {
  numero = Math.floor((min + max)/2);
  intentos = 0;
  document.getElementById("mensaje").innerHTML = "¿Tu número es " + numero + "?";
}


function reiniciar() {
  min = 1;
  max = 100;
  numero = Math.floor((min + max)/2);
  intentos = 0;
  document.getElementById("mensaje").innerHTML = ''
}

function esMasBajo() {
  intentos++;
  max = numero - 1;
  numero = Math.floor((min + max) / 2);
  document.getElementById("mensaje").innerHTML = "¿Tu número es " + numero + "?";
}

function esIgual() {
  intentos++;
  document.getElementById("mensaje").innerHTML = "¡Los gatitos adivinaron tu número en " + intentos + " intentos!";
}

function esMasAlto() {
  intentos++;
  min = numero + 1;
  numero = Math.floor((min + max) / 2);
  document.getElementById("mensaje").innerHTML = "¿Tu número es " + numero + "?";
}
