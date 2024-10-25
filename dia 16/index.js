let nomes = [];
let senhas = [];

function solicitarOpcao(){
    let opcao = prompt("Digie a opção desejada:\n 1-Cadastro\n 2-login\n 3-excluir cadastro existente\n 4-Encerrar programa");
    return opcao;
}

function cadastrar(){
    nomes.push(prompt("Digite o seu nome para o cadastro:"))
    senhas.push(prompt("Digite a sua senha para o cadastro:"));
}

function login(nome,senha){
    let indice = nomes.indexOf(nome);
    if (indice !== -1 && senhas[indice] ==  senha) {
        return true;
    } else {
        return false;    
    }
}

function excluiCadastro(nome, senhas) {
    let indice = nomes.indexOf(nome);
    if (indice!== -1 && senhas[indice] ==  senha) {
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log("Cadastro excluído com sucesso");
    } else {
        console.log("Usuario não localizado")
    }    
}

let continuar = true;
while (continuar) {
    let opcao = solicitarOpcao();

    switch(opcao) {
        case '1':
            cadastrar();
            break;
        case '2':
            let nome = prompt("Digite seu nome para o login:");
            let senha = prompt("Digite a sua senha para o login:");
            if (login(nome, senha)) {
                console.log("Login efetuado com sucesso!");
            } else {
                console.log("Usuário ou senha inválidos!");
            }
            break;
        case '3':
            nome = prompt("Digite seu nome para excluir o cadastro:");
            senha = prompt("Digite a sua senha para excluir o cadastro:");
            excluiCadastro(nome, senhas);
            break;
        case '4':
            console.log("Programa encerrado!");
            continuar = false;
            break;
        default:
            console.log("Opção inválida!");
    }

}