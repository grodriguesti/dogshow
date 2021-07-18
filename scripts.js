function enviaForm(){
  var capturaNome = document.getElementById("name");
  var capturaEmail = document.getElementById("email");

  localStorage.setItem("name",capturaNome.value);
  localStorage.setItem("email",capturaEmail.value)
  
  alert("Registro incluído com sucesso!")

  document.getElementById('name').value='';
  document.getElementById('email').value='';


}