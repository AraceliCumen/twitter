// Nos aseguramos que la pagina cargue 
window.addEventListener('load',function(){
    // Capturamos el texto que se ingrese
    var textArea = document.getElementById('text-area');
    // Capturamos el boton 
    var button = document.querySelector('button');
    // capturamos el número de caracteres máximo ques epuede ingresar
    var counter = document.getElementById('counter-characters');
    // Agregamos el evento enable al text area
    textArea.addEventListener('input',function(event){
        // Declaramos una variable para capturar el número de caracteres que se ingrese en el textArea
        var tweetLength = textArea.textContent.length;
        // si el textarea esta vacio o la cantidad es mayoy a 140 se deshabilita el boton
        if (tweetLength > 0 && tweetLength <= 140) { 
          button.removeAttribute('disabled');
        } else { 
          button.setAttribute('disabled', 'disabled');
        }
    });
    // Agregamos el evento scroll 
    // funcion para que se redimensione el textarea
    textArea.addEventListener('input',function(event){
        textArea.style.height = '80px';
        // se redimensiona de acuerdo al scroll
        textArea.style.height = textArea.scrollHeight + 'px'; 
    });
    // Aregamos la función para  controlar los caracteres
    textArea.addEventListener('input',function(event){
        var tweetLength = textArea.textContent.length;
        var result = 140 - tweetLength;
        counter.textContent = result;
        if (result < 20 && result > 10) {
          counter.setAttribute('class', 'yellow');
        } else if (result < 10 && result > 0) {
          counter.setAttribute('class', 'green');
        } else if (result < 0) {
          counter.setAttribute('class', 'red');
        } else {
          counter.setAttribute('class', 'blue');
        }
    });
    // Agregamos el evento click 
    button.addEventListener('click', function(event){
      // Creamos el contenedor donde se almaceneran los tweets
        var containerBig = document.createElement('div'); 
        var tagParagraph = document.createElement('p');
        var date = document.createElement('p');
        var paragraphMessage = document.createTextNode(textArea.textContent);
        var messages = document.getElementById('tweetContainer');
        tagParagraph.appendChild(paragraphMessage);
        var hour = new Date(); 
        // obtenemos la hora actual
        var hourTweet = hour.getHours();
        var minutes = new Date();
        var minutesText = minutes.getMinutes();
        var amPm = 'am';
        if (hourTweet > 12) {
          hourTweet = hourTweet - 12;
          amPm = 'pm';
        }
        var dateText = document.createTextNode(hourTweet + ':' + minutesText + ' ' + amPm);
        date.appendChild(dateText);
        date.setAttribute('class', 'date');
        containerBig.appendChild(tagParagraph);
        containerBig.appendChild(date);
        containerBig.setAttribute('class', 'paragraph');
        messages.appendChild(containerBig);
        textArea.textContent = '';
        // cada vez que cree un tweet se deshabilitara el boton
        button.setAttribute('disabled', 'disabled'); 
        counter.textContent = '140';
    });

});