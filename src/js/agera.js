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
 "R$ 12'600'000,00 ",
 "R$ 15'000'000,00 ",
 "R$ 13'800'000,00 ",
 "R$ 16'800'000,00 ",
 "R$ 18'000'000,00 ",
 "R$ 17'400'000,00"
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
starting();

// Inicializa o carrossel com os dados iniciais
function starting() {
    atualizarDados();
}

// Avança para o próximo item no carrossel
function right() {
    index++; // Incrementa o índice
    if (index >= image.length) { // Verifica se alcançou o final da lista
        index = 0; // Volta para o início
    }
    atualizarDados(); // Atualiza os elementos na interface
}

// Volta para o item anterior no carrossel
function left() {
    if (index <= 0) { // Verifica se o índice está no início
        index = image.length - 1; // Vai para o último item
    } else {
        index--; // Decrementa o índice
    }
    atualizarDados(); // Atualiza os elementos na interface
}

// Atualiza os elementos na interface com base no índice atual
function atualizarDados() {
    document.getElementById("nome").innerText = `${nome[index]}`;
    document.getElementById("potencia").innerText = `${potencia[index]}`;
    document.getElementById("velomax").innerText = `${velomax[index]}`;
    document.getElementById("acel").innerText = `${acel[index]} de 0-100 km/h`;
    document.getElementById("peso").innerText = `${peso[index]}`;
    document.getElementById("preco").innerText = `${preco[index]}`;
    document.getElementById("img-car").src = image[index];

    const radios = document.getElementsByClassName("radiocheck");
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = i === index; // Marca o rádio correspondente ao índice atual
      }
}
// Nova função para alterar o índice com base no rádio selecionado
function selecionarRadio(indexSelecionado) {
    index = indexSelecionado; // Define o índice selecionado
    atualizarDados(); // Atualiza os elementos da interface
}

// Adicionando eventos aos rádios para sincronizar o índice
function adicionarEventosRadios() {
    const radios = document.getElementsByClassName("radiocheck");
    for (let i = 0; i < radios.length; i++) {
        radios[i].onclick = function() {
            selecionarRadio(i); // Chama a função ao clicar no rádio
        };
    }
}

// Chama a função para vincular os eventos ao iniciar
adicionarEventosRadios();