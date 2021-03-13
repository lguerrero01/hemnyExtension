import browser from 'webextension-polyfill'



const mostrarDolar = (fechaYDolar) => {//recibe un array de dos posiciones
    let precioDolar = document.querySelector('#dolarito');
    let fechaActualizada = document.querySelector('#fechaActualizada');
//Remplaza el contenido html de dolar y fecha
    precioDolar.textContent = fechaYDolar[0];
    fechaActualizada.textContent = fechaYDolar[1];

}

const handleResponse = (message) => {
    mostrarDolar (message);
}

const handleError = (error) => {
    console.log(`Error: ${error}`);
}
  
const notifyBackgroundPage = (e) => {
    let sending = browser.runtime.sendMessage('dolartoday');
    sending.then(handleResponse, handleError);
}

notifyBackgroundPage();

