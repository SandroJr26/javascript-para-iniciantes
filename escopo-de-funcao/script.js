// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return (x += dois);
}
function dividirDois(x) {
  return (x /= dois);
}
console.log(somarDois(380));
console.log(dividirDois(294));

// O que fazer para total retornar 500?
let numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

console.log(numero);
const total = 10 * numero;
console.log(total);
