const formDados = document.getElementById("formDados");

function converter(evento) {
  evento.preventDefault();

  let numero = Number(prompt("Digite um número inteiro:"));

  let quadrado = numero * numero;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "O quadrado do número é: " + (numero * numero);
  
}

formDados.addEventListener("submit", converter);