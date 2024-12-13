     function entradamenu(){
        const searchValue = localStorage.getItem("searchValue");
        document.getElementById("searchbar").value = searchValue;
        filtercards();
     }
    entradamenu();
     
    document.getElementById("searchbar").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
      filtercards();
    }
});

function filtercards(){
    let pesquisa = document.getElementById("searchbar").value.toLowerCase();
    let cards = document.querySelectorAll('.carditem');
    cards.forEach(card =>{
        let marca = card.querySelector('.card-img').getAttribute('data-marca').toLowerCase();
        let modelo = card.querySelector('.card-img').getAttribute('data-modelo').toLowerCase();
        if(marca.includes(pesquisa) || modelo.includes(pesquisa) || pesquisa == `${marca} ${modelo}`){
            card.classList.remove('hidden');
            console.log('S');
        }
        else{
            card.classList.add('hidden');
            console.log('N');
        }
    })

}