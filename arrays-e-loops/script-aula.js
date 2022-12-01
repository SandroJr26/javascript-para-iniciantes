for (let numero = 0; numero <= 2; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 2) {
  console.log(i);
  i++;
}

var videogames = ["Playstation", "XBox", "Switch", "3DS"];

for (let item = 0; item < videogames.length; item++) {
  console.log(videogames[item]);
  if (videogames[item] === "XBox") break;
}

var frutas = ["Banana", "Melão", "Limão", "Melancia", "Caju", "Pera"];

frutas.forEach(function (fruta, i, array) {
  console.log(fruta, i, array);
});

var numero = 0;
var maximo = 50;
for (; numero <= maximo; ) {
  console.log(numero);
  numero++;
}
