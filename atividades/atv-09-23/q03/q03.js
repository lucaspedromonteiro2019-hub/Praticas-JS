const formDados = document.getElementById("formDados");

function converter(evento) {
  evento.preventDefault();

  let polegadas = Number(prompt("Digite o valor em polegadas:"));

  let centímetros = polegadas * 2.54;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "O valor em centímetros é: " + centímetros.toFixed(2);
  
}

formDados.addEventListener("submit", converter);