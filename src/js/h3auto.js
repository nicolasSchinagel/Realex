/*Este é o segundo conteúdo não aprendido, aqui o objetivo é simplificar o html, criando uma função para criar um h3 automático */
//cria a função
function createCardH3() {
    let cards = document.querySelectorAll('.carditem'); //cria a variável para os cards
     cards.forEach(card => { //para cada card de cards
        let marca = card.querySelector('.card-img').getAttribute('data-marca'); //marca será data-marca
        let modelo = card.querySelector('.card-img').getAttribute('data-modelo'); //modelo será dara-modelo
        let header = document.createElement('h3'); //definimos header como um nome para a criação de cada elemento h3
        header.textContent = `${marca} ${modelo}`;//o conteúdo de texto no header será equivalente a Marca+Modelo
         card.appendChild(header); }); //vincula o header como parte-filha do card
        } 
         // Chama a função para criar os headers
         createCardH3();