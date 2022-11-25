function areaQuadrada(lado) {
  return lado * lado;
}
console.log(areaQuadrada(2));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(83, 1.83));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de floresta";
  } else if (cor === "amarelo") {
    return "Eu gosto do sol";
  } else {
    return "Eu não tenho cor favorita";
  }
}
console.log(corFavorita("verde"));

function mostraConsole() {
  console.log("Clicou");
}

addEventListener("click", mostraConsole);
