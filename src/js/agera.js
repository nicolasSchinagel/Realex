let nome = [
    "Koenigsegg Agera",
    "Koenigsegg Agera R",
    "Koenigsegg Agera S",
    "Koenigsegg Agera RS",
    "Koenigsegg One:1",
    "Koenigsegg Agera Final"
];
let potencia = [
"960 cavalos",
"1140 cavalos",
"1030 cavalos",
"1160 cavalos",
"1341 cavalos",
"1160 cavalos"
];
let velomax = [
"390 km/h",
"440 km/h",
"400 km/h",
"447 km/h",
"440 km/h",
"447 km/h"
];
let acel = [
"3,0 segundos",
"2,8 segundos",
"2,9 segundos",
"2,8 segundos",
"2,8 segundos",
"2,8 segundos"
];
let peso = [
"1290 kg",
"1330 kg",
"1330 kg",
"1295 kg",
"1360 kg",
"1295 kg"
];
let preco = [
 "12'600'000,00 R$",
 "15'000'000,00 R$",
 "13'800'000,00 R$",
 "16'800'000,00 R$",
 "18'000'000,00 R$",
 "17'400'000,00 R$"
];
let image = [
 "../src/assets/agera.jpg",
"../src/assets/agerar.jpg",
"../src/assets/ageras.jpg",
"../src/assets/agerars.png",
"../src/assets/ageraone.jpg",
"../src/assets/agerafinal.jpg"
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
