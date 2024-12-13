let nome = [
    "Bugatti Veyron 16.4",
    "Bugatti Veyron 16.4 Grand Sport",
    "Bugatti Veyron Super Sport",
    "Bugatti Veyron Grande Sport Vitesse"
];
let potencia = [
"1001 cavalos",
"1001 cavalos",
"1200 cavalos",
"1200 cavalos"
];
let velomax = [
"407 km/h",
"407 km/h",
"431 km/h",
"410 km/h"
];
let acel = [
"2,5 segundos",
"2,7 segundos",
"2,5 segundos",
"2,6 segundos"
];
let peso = [
"1990 kg",
"1990 kg",
"1838 kg",
"1990 kg"
];
let preco = [
 "10'200'000,00 R$",
 "12'000'000,00 R$",
 "14'400'000,00 R$",
 "15'000'000,00 R$"
];
let image = [
 "../src/assets/veyron16.4.jpg",
"../src/assets/veyron16.4gs.jpg",
"../src/assets/veyronss.jpg",
"../src/assets/veyrongsv.jpg"
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
