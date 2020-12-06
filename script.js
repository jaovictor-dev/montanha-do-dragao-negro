//ajuste do tamanho da div no formulário Login/Cadastro

var altura = document.querySelector('.content')
function diminuir(){
    if (altura.style.height >= ""){
        altura.style.height = "460px"
    }
}
function aumentar(){
	if (altura.style.height <= "600px"){
        altura.style.height = "750px"
    }
}


//banner da página index.html

let time = 8000
let currentImageIndex = 0
let images = document.querySelectorAll("#slide img")
let max = images.length

function nextImage() {
  images[currentImageIndex].classList.remove("selected")

  currentImageIndex ++

  if(currentImageIndex >= max){
    currentImageIndex = 0
  }
  images[currentImageIndex].classList.add("selected")
}

function antImage() {
  images[currentImageIndex].classList.remove("selected")

  switch (currentImageIndex){
    case 0: {
      currentImageIndex = 2
      
      break
    }
    case 1: {
      currentImageIndex = 0
      
      break
    }
    case 2: {
      currentImageIndex = 1
      break
    }
  }

  images[currentImageIndex].classList.add("selected")
}

function start() {
  setInterval(() => {
    nextImage()
  }, time)
}



//validar dados fale conosco

function Enviar(){
  if(document.dados.name.value=="" || document.dados.name.value.length < 8){
    alert( "Preencha campo NOME corretamente!" );
    document.dados.name.focus();
    return false;
  }
  if( document.dados.mail.value=="" || document.dados.mail.value.indexOf('@')==-1 || document.dados.mail.value.indexOf('.')==-1 ){
    alert( "Preencha campo E-MAIL corretamente!" );
    document.dados.mail.focus();
    return false;
  }
  if (document.dados.msg.value==""){
    alert( "Preencha o campo MENSAGEM!" );
    document.dados.msg.focus();
    return false;
  }
  if (document.dados.msg.value.length < 50 ){
    alert( "É necessario preencher o campo MENSAGEM com pelo menos 50 caracteres!");
    document.dados.msg.focus();
    return false;
  }
  alert( "Mensagem enviada com sucesso!");
}

//validar dados cadastro
var nome_logar = document.getElementById("nome_cad")
var senha = document.getElementById("senha_cad")
var termos = document.getElementById("iaceito")

function Cadastrar(){
  if(document.cadastro.nome_cad.value=="" || document.cadastro.nome_cad.value.length < 5){
    alert( "Preencha campo NOME corretamente!" );
    document.cadastro.nome_cad.focus();
    return false;
  }
  if(document.cadastro.email_cad.value=="" || document.cadastro.email_cad.value.length < 8){
    alert( "Preencha campo E-MAIL corretamente!" );
    document.cadastro.email_cad.focus();
    return false;
  }
  if(document.cadastro.confirma_senha_cad.value!=senha.value){
    alert( "As senhas não coincidem. Tente novamente!" );
    document.cadastro.confirma_senha_cad.focus();
    return false;
  }
  if(termos.checked != true){
    alert( "Aceite os termos de Uso!" )
    return false;
  }
  alert( "Cadastrado com sucesso!" )
}

//validar login

function Logar(){
  if(document.login.nome_login.value!=nome_logar.value){
    alert( "Nome de usuario não encontrado" );
    document.login.nome_login.focus();
    return false;
  }
  if(document.login.senha_login.value!=senha.value){
    alert( "Senha incorreta. Tente novamente")
    document.login.senha_login.focus();
    return false;
  }
}