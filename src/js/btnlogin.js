/*Olá Cidade, se você está vendo isso, quero te avisar que consideramos o login como conteúdo já aprendido, por mais que não vimos isso 
diretamente em javascript, já vimos a lógica de como fazer na aula da Nivia, porém como não há Banco de Dados, usamos variáveis, além disso
esse é um conteúdo pedido por você, caso entendemos errado sinto muito */
//Comentador dos conteúdos de javascript: Nícolas

//criando as varoáveis e colocando sua equivalencia
function buttonclick(){
  var usernamebox = document.getElementById("textboxname");
  var username = usernamebox.value;
  var passwordbox = document.getElementById("textboxpassword");
  var password = passwordbox.value;
   //se o nome de usuario e senha forem iguais aos respectivos strings vai ir para a página de início
  if(username == "city" && password == "better"){
    alert("Logado com sucesso")
    window.location.href = "start.html";
  }
  //caso contrário vai zerar os valores das textbox e vai enviar um alert que está errado, além disso vai focar o textbox de cima e iniciar outra função
  else{
    passwordbox.value = "";
    usernamebox.value = "";
    alert("Senha ou nome incorretas")
    alteracaotemporaria();
    usernamebox.focus();
  }
  //criando a outra função que basicamente deixa o bordercolor vermelho por um tempo e depois volta ao original
  function alteracaotemporaria(){
    usernamebox.style.borderColor = "red";
    passwordbox.style.borderColor = "red";
    setTimeout( function() {
        usernamebox.style.borderColor = ""; // deixar as aspas vazias significa que o valor da bordercolor está voltando para o original definido  pelo css
        passwordbox.style.borderColor = "";
    }, 2000)
  }
}