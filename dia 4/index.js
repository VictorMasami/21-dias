const fome = prompt("você está com fome? (sim/nao)")
const dinheiro = prompt("você tem dinheiro para comer em seu retaurante favorito? (sim/nao)")
const restaurante = prompt("seu restaurante está aberto? (sim/nao)") 

if (fome === "nao" || dinheiro == "nao") {
    console.log("hoje a janta será em casa");
} else if (dinheiro === "sim" && restaurante === "sim") {
    console.log("hoje o jantar será no seu restaurante favorito!");
} else{
    console.log("Peça um delivery!");

}