var nome = "Sandro";

console.log(nome.length);
console.log(nome.valueOf());
console.log(nome.charAt(0));
console.log(nome.replace("andro", "alones"));
console.log(nome);

var altura = 1.8;

console.log(altura);
console.log(altura.toString());
console.log(altura.toFixed());

function areaQuadrada(lado) {
  return lado * lado;
}

console.log(areaQuadrada.toString());
console.log(areaQuadrada.length);

// JS interection test on the website

console.log(addEventListener.length);

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {});

console.log(btn.addEventListener("click", function () {}));

console.log(btn.classList);
btn.classList.add("active");
btn.classList.add("red");
console.log(btn.classList);
console.log(btn.innerText);

btn.addEventListener("click", function () {
  console.log("Click");
});
