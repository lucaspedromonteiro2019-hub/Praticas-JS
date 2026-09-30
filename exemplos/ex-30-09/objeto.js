const carro = { 
    marca: "Toyota", 
    modelo: "Corolla", 
    ano: 2020, 
    cor: "Prata",
    velocidade: 180,

    buzinar: function() {
        console.log("Buzinando!");
    },
    acelerar: function() {
        this.velocidade = this.velocide + 10;
    },
    frear: function() {
        this.velocidade = this.velocidade - 10;
    }
};

console.table(carro);

carro.cor = "Preto"; // altera a cor do carro

console.table(carro);
console.log('O ano do carro é: ' + carro.ano); // acessa o ano do carro

carro.buzinar(); // chama o método buzinar do objeto carro
carro.acelerar(); // chama o método acelerar do objeto carro
carro.frear(); // chama o método frear do objeto carro