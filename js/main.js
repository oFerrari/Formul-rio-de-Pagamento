import '@picocss/pico'
import '../css/cartao-credito.css';

const btnEnviar = document.querySelector('.credit-card')
const inputNumero = document.querySelector('card-type')
const inputNome = document.querySelector('card-holder')
const inputData = document.querySelector('expiration')
const inputCvv = document.querySelector('ccv-block')


inputNumero.addEventListener('.credit-card',() =>{
    
})

btnEnviar.addEventListener('click', () => {
    alert("voce esta clicando no cartão")
})