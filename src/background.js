import browser from 'webextension-polyfill'

const handleMessage= (request, sender, sendResponse) => {//maneja insultos
  console.log('este es el sender',sender);
    if (request === 'perrito') {
      fetch('https://insult.mattbas.org/api/insult') 
        .then( respuesta => {
            return respuesta.text();
        }) 
        .then(resultado => {
          let string =  resultado.replace('You are','Hemny is');
          sendResponse(string);
        })
    }
    if (request === 'dolartoday') {
      fetch('https://s3.amazonaws.com/dolartoday/data.json') 
            .then( respuesta => {
                return respuesta.json();
            }) 
            .then(resultado => {
              sendResponse([resultado.USD.dolartoday, resultado._timestamp.fecha]);
            })
    }
    return true;
}

  browser.runtime.onMessage.addListener(handleMessage);