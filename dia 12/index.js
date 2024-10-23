let nomes = [];
let senhas = [];
let contador = 0;
let continuar = true;

while(continuar){
    let entradaDoUsuario = prompt("Digite a opção que preferir:\n 1- Cadastro \n 2-Login \n 3- excluir um cadastro \n 4-Parar o programa \n ");
    switch (entradaDoUsuario) {
    case 1:
    nomes[contador] = prompt("Para o cadastro digite o seu nome: ");
    senhas[contador] = prompt("Agora, digite uma senha: ");
        break;
    case 2:
        let nomeLogin = prompt("Digite seu nome: ");
        let senhaLogin = prompt("Digite sua senha: ");
        let loginValido = false;

        for (let i = 0; i < contador; i++) {
            if (nomes[i] == nomeLogin && senhas[i] == senhaLogin) {
                loginValido = true;
                break;
            }
        }
    if (loginValido) {
        alert("Login realizado com sucesso!");
    } else {
        alert("Login ou senha inválidos!");
    }    
        break;
    case 3:
        let nomeExcluir = prompt("Digite o nome do cadastro que deseja excluir: ");
        let nomesAux = []
        let senhasAux = [] 
        let nomessAux = [] 
        let contadorAux = [] 
        for (let i = 0; i < contador; i++) {
            if (nomes[i] == nomeExcluir) {
                alert("Cadastro excluído com sucesso!");
            } else {
                nomesAux[contadorAux] = nomes[i];
                senhasAux[contadorAux]  =  senhasAux[i];
                contadorAux++;
            }
        }

        nomes = nomesAux;
        senhas = senhasAux;
        contador -- ;
        
        break;
    default:
        console.log("opção invalida")
        break;
    }
}
