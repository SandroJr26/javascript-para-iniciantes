var pessoa = {
  nome: "Sandro",
  idade: 25,
  profissao: "Garçom",
  possuiFaculdade: false,
};
console.log(pessoa);

var quadrado = {
  lados: 4, //  Atualizações
  area: function (lado) {
    //  area(lado) {}
    return lado * lado;
  },
  perimetro: function (lado) {
    // perimetro(lado)
    return this.lados * lado;
  },
};
console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.PI);
console.log(Math.random());
