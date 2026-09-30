const livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    paginas: 256,

    resumo: function() {
        return `${this.titulo} foi escrito por ${this.autor} e possui ${this.paginas} páginas.`;
    }
};

console.log(livro.resumo());