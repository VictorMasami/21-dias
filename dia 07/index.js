let saldo = 1000;
let maiorValorInserido = 0;
let somaDeValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false 

do {
    const nome = prompt("Digite seu nome: ")
    const cpf = prompt('DIgite seu cpf: ')
    const valor = Number(prompt('Digite o valor da transação: '))
    const operacao = prompt("Qual operação deseja fazer? S/D")

    if (valor < 0) {
    console.log('Valor inválido. A transação não foi realizada. ');    
    } else if (operacao == "S" && valor > saldo) { 
    console.log("Saldo insuficiente. A transação não foi realizada");
    } else if (operacao == "S") {
    console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
    saldo -= valor;
    totalTransacoes++;
    somaDeValoresInseridos += valor;
    if (valor > maiorValorInserido) {
    maiorValorInserido = valor;
    }
    console.log(`Transação realizada com sucesso, seu saldo atual é R$${saldo}.`);
    }   

    const opcao = prompt("Deseja continuar? (1 para continuar,2 para parar):");
    if (opcao === "1") {
    continuar = true
    } else if (opcao === "2") {
    continuar = false
    }

} while (continuar)
console.log(`Saldo final: R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`)
console.log(`Média dos valores inseridos: R$${(somaDeValoresInseridos / totalTransacoes)}`)