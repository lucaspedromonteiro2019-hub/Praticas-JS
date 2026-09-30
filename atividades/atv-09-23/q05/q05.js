const formDados = document.getElementById("formDados");

function converter(evento) {
  evento.preventDefault();

  valor_hora = float(input("Digite o valor da hora-aula: R$ "))
  horas_trabalhadas = float(input("Digite a quantidade de horas trabalhadas: "))
  
  salario = valor_hora * horas_trabalhadas

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "O salário do professor é: " + salario.toFixed(2);
  
}

formDados.addEventListener("submit", converter);