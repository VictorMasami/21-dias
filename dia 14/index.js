var nome;
var salario;

function perguntarAoUsuario() {
    nome = prompt("Qual seu nome?");
    salario = parseFloat(prompt("Qual seu salário?"));
    calcularAumento(nome, salario);
}


function calcularAumento(nome, salario) {
    var aumento = 0;

    if (salario <= 1500) {
        aumento = 0.2;
    } else if (salario >= 1501 || salario <= 2000) {
        aumento = 0.15; 
    } else if (salario >= 2001 || salario <= 3000){
        aumento = 0.1;
    } else if (salario >= 3001){
        aumento = 0.05;
    }
 
    var salarioNovo = salario + (salario * aumento);
    console.log("Nome: " + nome);
    console.log("Salário Antigo: " + salario);
    console.log("aumento: " + (aumento * 100) + "%");
    console.log("Salário Novo: R$ " + salarioNovo);

    perguntarNovamente ();
}

function perguntarNovamente() {
    var resposta = prompt("Deseja calcular um novo salário? (S/N)");
    if (resposta.toLowerCase() === "s") {
        perguntarAoUsuario();
    } else {
        console.log("Obrigado por utilizar nosso programa!");
    }
} 