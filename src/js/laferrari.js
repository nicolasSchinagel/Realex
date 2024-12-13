let nome = [
    "Ferrari LaFerrari",
    "Ferrari Laferrari Aperta"
];
let potencia = [
"963 cavalos",
"963 cavalos"
];
let velomax = [
"350 km/h",
"350 km/h"
];
let acel = [
"2,9 segundos",
"2,9 segundos"
];
let peso = [
"1585 kg",
"1585 kg"
];
let preco = [
 "8'400'000,00 R$",
 "12'000'000,00 R$"
];
let image = [
 "../src/assets/laferrari.png",
"../src/assets/laferrariaperta.jpg"
]
let index=0;

modelos();
function modelos(){
 if(index == image.length){
    index = 0;
 }
 document.getElementById("nome").innerText = `Nome: ${nome[index]}`;
 document.getElementById("potencia").innerText = `Potência: ${potencia[index]}`;
 document.getElementById("velomax").innerText = `Velocidade Máxima: ${velomax[index]}`;
 document.getElementById("acel").innerText = `Aceleração: ${acel[index]} de 0-100 km/h`;
 document.getElementById("peso").innerText = `Peso: ${peso[index]}`;
 document.getElementById("preco").innerText = `${preco[index]}`;
 document.getElementById("img-car").src = image[index];
 index++;

}
