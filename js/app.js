// Nos aseguramos que la pagina cargue 
window.addEventListener('load',function(){
    // Capturamos el texto que se ingrese
    var textArea = document.querySelector('textarea');
    // Capturamos el boton 
    var button = document.querySelector('button');
    // capturamos el número de caracteres máximo ques epuede ingresar
    var counter = document.getElementById('counter-characters');
    // Agregamos el evento enable al text area
    textArea.addEventListener('input',function(event){
        // Declaramos una variable para capturar el número de caracteres que se ingrese en el textArea
        var tweetLegnth = textArea.value.length;
        if(textArea.value != "" && tweetLength<=140){
            button.removeAttribute('disabled');
          } else{
            var attr = document.createAttribute('disabled');
            button.setAttribute('disabled','disabled');
          }
    });
    // Agregamos el evento scroll 
    // funcion para que se redimensione el textarea
    textArea.addEventListener('input',function(event){
        textArea.style.height = '80px';
        // se redimensiona deacuerdo al scroll
        textArea.style.height = textArea.scrollHeight + 'px'; 
    });
    // Aregamos la función para  controlar los caracteres
    textArea.addEventListener('input',function(){
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
    button.addEventListener('click', function(){
        var containerBig = document.createElement('div'); // contenedor donde se almacenera los tweets
        var tagParagraph = document.createElement('p');
        var date = document.createElement('p');
        var paragraphMessage = document.createTextNode(textArea.textContent);
        var messages = document.getElementById('writetwitt');
        tagParagraph.appendChild(paragraphMessage);
        var hour = new Date(); // para obtener la hora actual
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
        // cada vez que cree un twwet se deshabilitara el boton
        button.setAttribute('disabled', 'disabled'); 
        counter.textContent = '140';
    });

});