import browser from 'webextension-polyfill'

//Variables
const cards = document.querySelectorAll('[data-asin]');

//////////////////////////////////////Funciones

const remplazarDatos = (cards, message) => {
    
    cards.forEach(element => {
        let precios = element.querySelector('.a-price');//obtiene todos los precios

        if (element.querySelector('h2>a>span')){ //selecciona el titulo y lo remplaza 

            element.querySelector('h2>a>span').textContent = message;

        } 

        if(precios && precios.querySelectorAll('span')[1] && precios.querySelectorAll('span')[1].querySelectorAll('span .a-price-whole')[0]){// remplaza todos los precios por 69

            precios.querySelectorAll('span')[1].querySelectorAll('span .a-price-whole')[0].textContent = '69';

        } 

        if (element.querySelector('[data-asin] img') ){//Remplaza imagenes aleatoriamente

            let imagen1 = 'https://scontent-mia3-2.xx.fbcdn.net/v/t31.0-8/1795469_605894712836154_1429925728_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=qdcrKSZgACAAX8KQOAU&_nc_ht=scontent-mia3-2.xx&oh=d5c32accb9d4c3d5db9db86ef213ae13&oe=6071EA1E';
            let imagen2 = 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/375469_10200092234936687_544691268_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=zWgNl8ZyC_oAX8srD9z&_nc_ht=scontent-mia3-1.xx&oh=eb6fd778004e5e3f44cdf7ca0c7185f4&oe=606F97B1';
            let imagen3 = 'https://scontent-mia3-1.xx.fbcdn.net/v/t31.0-8/178618_239311876194616_1262544442_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=2c4854&_nc_ohc=keS5r1jhXygAX83jdwO&_nc_ht=scontent-mia3-1.xx&oh=23a74592c8bb7acafe36cb54c9acecf6&oe=60715D11';
            let imagen4 = 'https://scontent-mia3-1.xx.fbcdn.net/v/t31.0-8/892042_465277793545690_1543399719_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=V43PEPGob8oAX8KpPn6&_nc_ht=scontent-mia3-1.xx&oh=374d3e419da0152e485e82b7bb6904b9&oe=60713D47';
            let imagen5 = 'https://scontent-mia3-2.xx.fbcdn.net/v/t31.0-8/893252_465277773545692_981283630_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=AiAJN95A9-MAX-Qv_-6&_nc_ht=scontent-mia3-2.xx&oh=3b6bf1821a3dff6097093f5580397b2f&oe=6070112B';
            let arrayImg = [imagen1,imagen2,imagen3,imagen4,imagen5];
            let numeroAleatorio = Math.floor(Math.random() * Math.floor(arrayImg.length));
            
            let img = element.querySelector('[data-asin] img');
            img.src = arrayImg[numeroAleatorio];
            img.removeAttribute("srcset");
        }
        
    });
}

const handleResponse = (message) => {
    remplazarDatos(cards, message);
}

const handleError = (error) => {
    console.log(`Error: ${error}`);
}
  
const notifyBackgroundPage = (e) => {
    let sending = browser.runtime.sendMessage('perrito');
    sending.then(handleResponse, handleError);
}

notifyBackgroundPage();
