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

function imc2(peso, altura) {
  const imc2 = peso / altura ** 2;
  console.log(imc2);
}

imc2(83, 1.83);
console.log(imc2(83, 1.83));

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "Por favor, preencha com um número!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados}`;
}
console.log(faltaVisitar(5));

var profissao = "Designer";
function dados() {
  var nome = "Sandro";
  var idade = 25;
  function outrosDados() {
    var endereco = "Guanambi";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados());

imc3(83, 1.83);

function imc3(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
