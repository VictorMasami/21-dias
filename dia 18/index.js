class livro {
    Titulo
    Autor
    Editora
    Ano 
    Disponibilidade = true
    constructor(Titulo, Autor, Editora, Ano) {
        this.Titulo = Titulo
        this.Autor = Autor
        this.Editora = Editora
        this.Ano = Ano    
    }
}

let livros = []
livros.push(new livro("livro1", "marcos", "editora A", 2001))
livros.push(new livro("livro2", "marcos", "editora B", 2009))

class Biblioteca {
    Nome
    Endereco
    Telefone
    Acervo = []
    constructor(Nome, Endereco, Telefone, Acervo) {
    this.Nome = Nome
    this.Endereco = Endereco
    this.Telefone = Telefone
    this.Acervo = Acervo
    }

    BuscarLivro(titulo){
        this.Acervo.forEach(livro => {
            if(livro.Titulo === titulo){
                if(livro.Disponibilidade == true) {
                   livro.Disponibilidade = false;
                   emprestado = true;                     
                }
            }
        })
        if (emprestado){
            return true;
        } else {
            return false;
        }
    }

    DevolverLivro(titulo){
        livros.forEach(livro => {
            if (livro.titulo === titulo){
                livro.Disponibilidade = true;
                console.log("Livro devolvido")
            }  
        })  
    }

}

let biblioteca = new Biblioteca("Biblioteca XYZ", "rua 123", "123456789" )

biblioteca.BuscarLivros("livro2");
biblioteca.EmprestarLivro("livro1")
biblioteca.DevolverLivro("livro1"); //