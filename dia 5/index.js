// criando variáveis de opção do usuário

let opcao1 = parseInt(prompt('digite um número de sua escolha:'))
let opcao2 = parseInt(prompt('digite outro número de sua escolha:'))
let operacao = parseInt(prompt('qual operação você deseja realizar? (op1 +;op2 -; op3 /; op4 *)'))

// criando switchcase

switch (operacao) {
    case 1:
        console.log(opcao1 + '+' + opcao2 +'=' + (opcao1 + opcao2))
        break;
    case 2:
        console.log(opcao1 +'-' + opcao2 + '=' + (opcao1-opcao2))
        break;
    case 3:
        console.log(opcao1 + '/'+ opcao2 + '='+ (opcao1 / opcao2))
        break;
    default:
        console.log(opcao1 + '*'+ opcao2 + '='+ (opcao1 + opcao2))
        break;
}