/*Código com função para o botao para trocar o tipo do modelo

Como fazer? Usando a lógica do conteúdo já apresentado de como mudar as imagens de tempos e tempos, vamos fazer algo semelhante,
utilizando para outro princípio
*/

// Cria uma variável para cada característica do carro
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
 "R$ 10'200'000,00",
 "R$ 12'000'000,00",
 "R$ 14'400'000,00",
 "R$ 15'000'000,00 "
];
let image = [
 "../src/assets/veyron16.4.jpg",
"../src/assets/veyron16.4gs.jpg",
"../src/assets/veyronss.jpg",
"../src/assets/veyrongsv.jpg"
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