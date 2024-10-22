let nomes = [];
let notas = [];
let contador = 0;
let continuar = true;

while (continuar) {
    let nome = prompt("Digite o nome do " + (contador + 1) + "º aluno");
    let nota = parseInt(prompt("Digite a nota do aluno: "));
    nomes[contador] = nome; //feito para atribuir a array "nomes" e contador para saber localizar a psoição dentro da array
    notas [contador] = nota; //feito para atribuir a array "notas" e contador para saber localizar a psoição dentro da array
    contador++;
    let resposta = prompt("Deseja continuar cadastrando alunos? (s/n) ")    
    if (resposta == "n"){
    continuar = false; 
     } else {
        continuar = true;
     }
    }

console.log("Notas do alunos: ");
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i] + " - " + notas[i]);
}

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

let media = somaNotas / notas.length;

console.log( "A soma das notas foi: " + somaNotas)
