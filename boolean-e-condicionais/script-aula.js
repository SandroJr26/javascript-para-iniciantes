var possuiGraduacao = true,
  possuiDoutorado = false;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else if (possuiDoutorado) {
  console.log("Não possui graduação");
} else {
  console.log("Não possui nada");
}
if (!!possuiGraduacao) {
  console.log("Não possui graduação");
}
console.log(!!possuiDoutorado);

var nome = "Sandro";
if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}
console.log(nome === "Sandro"); // Extritamente igual
console.log(nome !== "Rafael"); // Estritamente diferente

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso");
}

var condicional2 = 5 - 5 || 7 + 7 || 10 - 2;
console.log(condicional2);

var corFavorita = "Amarelo";

switch (corFavorita) {
  case "Azul":
    console.log("Azul");
    break;
  case "Amarelo":
    console.log("Amarelo");
    break;
  case "Lilás":
    console.log("Lilás");
    break;
  default:
    console.log("Feche olhos.");
}
