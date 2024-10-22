let arrayinserida = [];
let arrayinvertida = [];
for (let i = 0; i < 5; i++) {
    let numero=parseInt(prompt("Digite o " + (i + 1) + "º número"));
    array[i] = numero;
}

console.log("Array original: " + arrayinserida);

let contador = 4;
for (let i = 0; i < 5; i++) {
    arrayinvertida[1] = arrayinserida[contador];
    contador--;
}

console.log("Array invertido: " + arrayinvertida);