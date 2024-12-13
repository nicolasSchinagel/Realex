function createCardHeaders() {
    let cards = document.querySelectorAll('.carditem');
     cards.forEach(card => { 
        let marca = card.querySelector('.card-img').getAttribute('data-marca'); 
        let modelo = card.querySelector('.card-img').getAttribute('data-modelo'); 
        let header = document.createElement('h3'); 
        header.textContent = `${marca} ${modelo}`;
         card.appendChild(header); }); 
        } 
         // Chama a função para criar os headers ao carregar a página 
         window.onload = createCardHeaders;