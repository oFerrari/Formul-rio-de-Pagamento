import '@picocss/pico'
import '../css/cartao-credito.css';

const btnEnviar = document.querySelector('.btnConsultarUsuario')

const inputNumero = document.querySelector('#numeroCartao')
const mostrarNumero = document.querySelector('.card-number')

const inputNome = document.querySelector('#nome')
const mostrarNome = document.querySelector('.card-holder')

const inputData = document.querySelector('#data')
const inputCvv = document.querySelector('#ccv')

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
    if(mostrarNome.textContent.length == 10){
        inputNome.value += `\n`
    }
})



