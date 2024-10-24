let nome = prompt("Digite seu nome:");
let altura = prompt("Olá" + nome + " hoje iremos calcular o seu IMC, por favor insira sua altura em metros: (ex: 1,83 )");
let peso = prompt(nome + "Agora precisamos saber seu peso, Digite seu peso em Kg: ");
let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Seu IMC é classificado como magreza");
} else if (imc < 24,9) {
    console.log("Seu IMC é classificado como normal");
} else if (imc < 29.9) {
    console.log("Seu IMC é classificado como sobrepeso");
} else if (imc < 34.9) {
    console.log("Seu IMC é classificado como obesidade grau I");
} else if (imc < 39.9) {
    console.log("Seu IMC é classificado como obesidade grau II (severa)");
} else {
    console.log("Seu IMC é classificado como obesidade grau III (mórbida)");
}