     /* Este é um novo conteúdo dividido em tres javascripts, cada um dependendo da página colocada
   o novo conteúdo é sobre fazer a barra de pesquisa funcionar
   Este código é o principal da barra de pesquisa, é nele onde toda a ideia gira
*/
     //primeiro vamos ter que voltar aquela const usada antes, para pegar valores definido na barra de pesquisa de outras páginas
     function entradamenu(){
        //defini a const novamente, mas aqui e pegando o valor do storage
        const searchValue = localStorage.getItem("searchValue");
        //defini o valor desta searchbar como a da const definida
        document.getElementById("searchbar").value = searchValue;
        //começa a função filtercards
        filtercards();
     }
     //a função entradamenu é ativada após o inicio da página de pesquisa uma vez para pegar os valores
    entradamenu();
     
    //faz outro evento para searchbar envolvendo que se clicar tecla enter, começara o filtercards
    document.getElementById("searchbar").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
      filtercards();
    }
});
//a função filtercards tem como objetivo fazer aparecer somente os cards com nomes correspondentes, idependente se esteja em maiscula ou minuscula
//aqui temos algo não explicado, que está no html também, o (data-...), usamos ele para definir um dado adicional no código, 
function filtercards(){
    let pesquisa = document.getElementById("searchbar").value.toLowerCase(); //define a pesquisa que é igual a searchbar em minuscula
    let cards = document.querySelectorAll('.carditem'); //define uma variavel para os cards, neste caso é cum conjunto de variaveis
    cards.forEach(card =>{ //para cada card vindo de cards ocorrerá as seguintes ações
        let marca = card.querySelector('.card-img').getAttribute('data-marca').toLowerCase(); //marca é igual a data-marca em minusculo
        let modelo = card.querySelector('.card-img').getAttribute('data-modelo').toLowerCase();//modelo é igual a data-modelo em minusculo
        //se marca está citada na pesquisa ou modelo ou marca e modelo, irá fazer apareces
        //.includes é utilizado para ver se algo inclui outro, se a pesquisa está incluida na marca, por exemplo
        if(marca.includes(pesquisa) || modelo.includes(pesquisa) || pesquisa == `${marca} ${modelo}`){
            card.classList.remove('hidden');
        }
        //caso o contrário, irá fazer desaparecer o card
        else{
            card.classList.add('hidden');
        }
    })

}