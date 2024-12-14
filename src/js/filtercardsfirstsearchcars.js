/* Este é um novo conteúdo dividido em tres javascripts, cada um dependendo da página colocada
   o novo conteúdo é sobre fazer a barra de pesquisa funcionar
*/
document.getElementById("searchbar").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
      firstsearch();
    }
});
function firstsearch(){
const searchValue = document.getElementById("searchbar").value;
localStorage.setItem("searchValue", searchValue);
window.location.href="../searchmenu.html"; //a unica diferença entre o filtercardsfirstsearch e este é que como esse é para páginas dentro da pasta cars usamos ../ ao invés de ./
}