// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
  nome: "Sandro",
  sobrenome: "Júnior",
  nascimento: "26-01-1997",
  nacionalidade: "Brasileiro",
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome} nasceu em ${this.nascimento} e tem a nacionalidade de ${this.nacionalidade}`;
  },
};
console.log(dadosPessoais);

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cao = {
  animal: "Cachorro",
  raca: "Labrador",
  cor: "preta",
  idade: 10,
  bravo(pessoa) {
    if (pessoa === "homen") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};

console.log(cao.bravo("homen"));
