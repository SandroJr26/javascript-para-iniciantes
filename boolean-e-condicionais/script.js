// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 25;
var primoIdade = 25;
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if (minhaIdade > primoIdade) {
  console.log("É maior");
} else if (minhaIdade === primoIdade) {
  console.log("É igual");
} else {
  console.log("Não");
}
// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log("Será retornado 'True'");
console.log(!!expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //True
var idade = 28; //True
var possuiDoutorado = false; //False
var empregoFuturo; // False
var dinheiroNaConta = 0; // False

console.log(!!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log("Brasil meis habitantes");
} else {
  console.log("Brasil menos habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
