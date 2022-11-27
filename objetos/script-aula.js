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

var a = {};
console.log(typeof a);

var menu = {
  width: 800,
  height: 5,
  backgroundColor: "#84E",
};

menu.backgroundColor = "#000";
console.log(menu);

menu.color = "blue";
menu.esconder = function () {
  console.log("Escondi");
};

var bg = menu.backgroundColor;
console.log(menu.color);
console.log(menu.esconder());

var height = 120;
var menu = {
  width: 800,
  height: 50,
  color: "yellow",
  metadeHeight() {
    return this.height / 2;
  },
};

console.log(menu.metadeHeight());
console.log(menu.hasOwnProperty("color"));
