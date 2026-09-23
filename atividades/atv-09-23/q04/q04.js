const formDados = document.getElementById("formDados");

function converter(evento) {
  evento.preventDefault();

  let raio = Number(prompt("Digite o raio do círculo:"));


  let circunferencia = 2 * Math.PI * raio;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "O valor da circunferência é: " + circunferencia.toFixed(2);
  
}

formDados.addEventListener("submit", converter);