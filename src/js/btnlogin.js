function buttonclick(){
  var usernamebox = document.getElementById("textboxname");
  var username = usernamebox.value;
  var passwordbox = document.getElementById("textboxpassword");
  var password = passwordbox.value;

  if(username == "city" && password == "better"){
    alert("Logado com sucesso")
    window.location.href = "start.html";
  }
  else{
    passwordbox.value = "";
    usernamebox.value = "";
    alert("Senha ou nome incorretas")
    alteracaotemporaria();
    usernamebox.focus();
  }
  function alteracaotemporaria(){
    usernamebox.style.borderColor = "red";
    passwordbox.style.borderColor = "red";
    setTimeout( function() {
        usernamebox.style.borderColor = "";
        passwordbox.style.borderColor = "";
    }, 2000)
  }
}