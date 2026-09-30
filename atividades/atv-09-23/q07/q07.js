const formDados = document.getElementById("formDados");

function converter(evento) {
  evento.preventDefault();

inicio = int(input("Digite o primeiro valor: "))
fim = int(input("Digite o segundo valor: "))


  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "O valor da soma dos números inteiros entre " + inicio + " e " + fim + " é: " + soma.toFixed(2);
  
}

formDados.addEventListener("submit", converter);