import '@picocss/pico'
import '../css/cartao-credito.css';

const btnEnviar = document.querySelector('.btnConsultarUsuario')
const frenteCartao = document.querySelector('.credit-card-front')
const versoCartao = document.querySelector('.credit-card-back')
const imagem = document.querySelector('.flag')

const inputNumero = document.querySelector('#numeroCartao')
const mostrarNumero = document.querySelector('.card-number')

const inputNome = document.querySelector('#nome')
const mostrarNome = document.querySelector('.card-holder')

const inputData = document.querySelector('#data')
const mostrarData = document.querySelector('.expiration')

const inputCcv = document.querySelector('#ccv')
const mostrarCvv = document.querySelector('.ccv-block')

/* inputNumero.addEventListener('input',() =>{
    mostrarNumero.innerHTML = `${inputNumero.value}`
}) */

inputNumero.addEventListener('input',() =>{
    mostrarNumero.textContent = inputNumero.value
    if(mostrarNumero.textContent.length == 4 || mostrarNumero.textContent.length == 9 || mostrarNumero.textContent.length == 14){
        inputNumero.value +=   ` `
    }
})

inputNome.addEventListener('input',() =>{
    mostrarNome.textContent = inputNome.value
})

inputData.addEventListener('input',() =>{
    mostrarData.textContent = inputData.value
    
})


inputCcv.addEventListener('input',() =>{
    versoCartao.style.cssText = 'backface-visibility: visible;'
    frenteCartao.style.cssText = 'display: none;'
    mostrarCvv.style.cssText = 'transform: rotateY(180deg);'
    mostrarCvv.textContent = inputCcv.value

})