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


window.addEventListener("load", start)


