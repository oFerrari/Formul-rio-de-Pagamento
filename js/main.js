import '@picocss/pico'
import '../css/cartao-credito.css';

const btnEnviar = document.querySelector('.btnConsultarUsuario')

const inputNumero = document.querySelector('#numeroCartao')
const mostrarNumero = document.querySelector('.card-number')

const inputNome = document.querySelector('#nome')
const inputData = document.querySelector('#data')
const inputCvv = document.querySelector('#ccv')



inputNumero.addEventListener('input',() =>{
    mostrarNumero.textContent = inputNumero.value
    if(mostrarNumero.textContent.length == 4 || mostrarNumero.textContent.length == 9 || mostrarNumero.textContent.length == 14){
        inputNumero.value +=   ` `
    }
})



