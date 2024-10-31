class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id,nome,categoria,endereco,telefone) {
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id;
        this.IdHotel = idHotel;
        this.Responsavel = responsavel;
        this.DiaEntrada = diaEntrada;
        this.DiaSaida = diaSaida;
    }
}

let hoteis = [];
let reservas = [];
let idHotel = [];
let idReserva = [];

function cadastrarHotel(nome, categoria, endereco, telefone) {
    let nome = prompt("Digite o nome do hotel: ")
    let categoria = prompt("Digite a categoria do hotel: ");
    let endereco = prompt("Digite o endereço do hotel: ");
    let telefone = prompt("Digite o telefone do hotel: ");
    let hotel = new hotel (idHotel, nome, categoria, endereco, telefone)
    idHotel ++;
    hoteis.push(hotel);
}

function cadastrarReserva (){
    let idHotel;
    let existe = false;
    do {
        idHotel = parseInt(prompt("Digite o ID do hotel: "));
        for(let i = 0; i < hoteis.length; i++){
            if(hoteis[i].Id === idHotel){
                existe = true;
            }else if ( idHotel === hoteis[i].Id){
                console.log("Id do hotel não cadastrado");
            }
        }

    } while (!existe);

    let nome =prompt("Digite o nome do responsável:")
    let diaEntrada = new Date(prompt("Digite a data de entrada (DD/MM/YYYY): "));
    let diaSaida
    do{
        diaSaida = parseInt(prompt("Digite a data de saída:));
            if(diaSaida < diaEntrada){
                console.log("Data de saída inválida");
             }
    while (diaSaida < diaEntrada) {
         let reserva = newReserva(idReserva, idHotel, nome, diaEntrada, diaSaida );
         idReserva++;
         reservas.push(reserva);
    }
}

