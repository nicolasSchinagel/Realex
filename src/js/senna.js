let nome = [
    "Maclaren Senna",
    "Maclaren Senna GTR"
];
let potencia = [
"800 cavalos",
"825 cavalos"
];
let velomax = [
"335 km/h",
"340 km/h"
];
let acel = [
"2,8 segundos",
"2,8 segundos"
];
let peso = [
"1198 kg",
"1188 kg"
];
let preco = [
 "8'000'000,00 R$",
 "8'500'000,00 R$"
];
let image = [
 "../src/assets/senna.png",
"../src/assets/sennagtr.jpg"
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
