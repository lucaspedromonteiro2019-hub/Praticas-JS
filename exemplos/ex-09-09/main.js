let nome = "Pedro Lucas";
let idade = 18;

console.log("O nome do usuário é: " + nome);
console.log("A idade do usuário é: " + idade);

const pNomeUsuario = document.getElementById("nomeUsuario"); // pega um elemento pelo id
pNomeUsuario.textContent = "O nome do usuário é: " + nome;

const pIdadeUsuario = document.getElementById("idadeUsuario"); // pega um elemento pelo id
pIdadeUsuario.textContent = "A idade do usuário é: " + idade;