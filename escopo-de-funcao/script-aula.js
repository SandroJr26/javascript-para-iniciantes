"use strict"; //  Usado para prevenir erro de escopo

function mostrarCarro() {
  var carro = "Gol";
  console.log(carro);
}

mostrarCarro();

if (false) {
  const mes = "Dezembro";
  console.log(mes);
}

{
  var carro2 = "Gol";
  const ano = 1994;
}

console.log(carro2);

var i = 50;

for (let i = 0; i <= 10; i++) {
  console.log(`Número ${i}`);
}

console.log(i * 10);

const semana = 'Sexta';

console.log(semana)

const data = {
  ano: 2022,
  mes: 'Dezembro'
}

console.log(data)

data.ano = 2021;

console.log(data)