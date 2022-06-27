const cabecalho = document.querySelector('.cabecalho')
const cabecalhoTitulo = document.querySelector('.cabecalho__titulo')
const icone = document.querySelector('.icone')
const titulo = document.querySelector('.titulo')
const botao = document.querySelector('.ativaModo')
const rodape = document.querySelector('.rodape')
const rodapeTitulo = document.querySelector('.rodape__titulo')
const corpo = document.querySelector('.corpo')

const elementos = [cabecalho, cabecalhoTitulo, icone, titulo, botao, rodape, rodapeTitulo, corpo]

function darkModeOn() {
 for (i = 0; i < elementos.length; i ++) {
  elementos[i].classList.toggle('darkMode')
 }
 if (titulo.classList.contains('darkMode')){
  titulo.innerHTML = "Dark Mode"
 } else {
  titulo.innerHTML = "Bright Mode"
 }
 if (botao.classList.contains('darkMode')){
  botao.innerHTML = "Switch to Bright Mode"
 } else {
  botao.innerHTML = "Switch to Dark Mode"
 }
}

botao.addEventListener('click', () => {
  darkModeOn()
})