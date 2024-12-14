/* Este é um novo conteúdo dividido em tres javascripts, cada um dependendo da página colocada
   o novo conteúdo é sobre fazer a barra de pesquisa funcionar
*/

//adiciona um evento para a searchbar envolvendo teclas ,se pressionar a tecla enter, a função vai começar.
document.getElementById("searchbar").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
      firstsearch();
    }
});
//a função define uma variavel const que é o valor da searchbar nesta página
function firstsearch(){
const searchValue = document.getElementById("searchbar").value;
localStorage.setItem("searchValue", searchValue); //armazena a const como searchvalue no storage

/* O que é Storage? 
 Storage é basicamente como um "armazem externo", nele pode-se colocar variáveis definidas em uma página que serão usadas em outras
*/

//vai para a página principal das pesquisas
window.location.href="./searchmenu.html";
}