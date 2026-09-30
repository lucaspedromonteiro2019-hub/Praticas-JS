const formDados = document.getElementById("formDados");

function converter(evento) {
  evento.preventDefault();

n1 = float(input("Digite a nota da N1: "))
n2 = float(input("Digite a nota da N2: "))

nota_final = (n1 * 2 + n2 * 3) / 5

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "O valor da nota final é: " + nota_final.toFixed(2);
  
}

formDados.addEventListener("submit", converter);