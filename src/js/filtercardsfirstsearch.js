document.getElementById("searchbar").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
      firstsearch();
    }
});
function firstsearch(){
const searchValue = document.getElementById("searchbar").value;
localStorage.setItem("searchValue", searchValue);
window.location.href="../searchmenu.html";
}