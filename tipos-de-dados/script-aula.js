var nome = "Sandro";
var idade = 25;

console.log(typeof nome, typeof idade);

// o "null" retornará -object- por causa de um bug do Javascript

var sobreNome = "Junior";
var nomeCompleto = nome + " " + sobreNome;

console.log(nomeCompleto);

var gols = 1000;
var frase1 = "Sandro fez " + gols + " gols";

console.log(typeof frase1);

var ano = "2022";
var mes = 08;

console.log(ano + mes);

var frase2 = `Sandro fez ${gols * 3} gols`;

console.log(frase2);
