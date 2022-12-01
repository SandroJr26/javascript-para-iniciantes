// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anosDaCopa = [1959, 1962, 1970, 1994, 2002];

console.log(anosDaCopa[0]);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < anosDaCopa.length; i++) {
  console.log(`O Brasil ganhou a copa de ${anosDaCopa[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];

console.log(ultimaFruta);
console.log(frutas);
