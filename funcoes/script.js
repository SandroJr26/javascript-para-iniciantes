// Crie uma função para verificar se um valor é Truthy
function acessoNome(nome) {
  return !!nome;
}
console.log(acessoNome(" "));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  return lado * 4;
}
var soma = perimetro(8);

console.log(soma);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome; // `${nome} ${sobrenome}`
}
var nome = "Sandro";
var sobrenome = "Júnior";

console.log(nomeCompleto(nome, sobrenome));

// Crie uma função que verifica se um número é par
function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeValor(valor) {
  return typeof valor;
}

var tipo = tipoDeValor("");

console.log(tipo);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener("click", function mostraNome() {
  var nome1 = nomeCompleto(nome, sobrenome);
  console.log(nome1);
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
