
//Desafio Classificador de Nível do Herói

var nivel = prompt("Qual o nível do seu personagem");
let rank = "";

if (nivel > 0) {
    if (nivel <= 1000) {
        console.log("Ferro");
        rank = "Ferro";
    } else if (nivel <= 2000) {
        console.log("Bronze");
        rank = "Bronze";
    } else if (nivel <= 5000) {
        console.log("Prata");
        rank = "Prata";
    } else if (nivel <= 7000) {
        console.log("Ouro");
        rank = "Ouro";
    } else if (nivel <= 8000) {
        console.log("Platina");
        rank = "Platina";
    } else if (nivel <= 9000) {
        console.log("Ascendente");
        rank = "Ascendente";
    } else if (nivel <= 10000) {
        console.log("Imortal");
        rank = "Imortal";
    } else {
        console.log("Radiante");
        rank = "Radiante";
    }
} else {
    console.log("O herói está com um nível negativo!");
}

console.log(`O herói está no nível ${rank}`);

