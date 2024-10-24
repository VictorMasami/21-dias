// Perguntas
const fome = prompt("você está com fome? (sim/nao)")
const dinheiro =prompt("você tem dinheiro para comer fora? (sim/nao)")
const restaurante =prompt("o resturante que você quer está aberto? (sim/nao)")

// respostas mostradas no console
console.log(fome)
console.log(dinheiro)
console.log(restaurante)

if(dinheiro === "nao" || fome === "nao"){
     console.log("hoje a janta será em casa");
}else if (fome === "sim" && dinheiro === "sim" && restaurante === "nao"){ 
      console.log("Peça um delivery!");
}else{
    console.log("hoje o jantar será no seu restaurante preferido!!")
} 


