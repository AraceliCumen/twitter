// window.onload = function (){
//   var board = document.querySelector('.board-js');
//   // Programar  cada evento
//   // board.addEventListener('click',function(event){
//   //   //target me va a traer nla etiqueta a la que le de click y generó el evento
//   //   event.target.style.backgroundColor = 'red';
//   // });
//   // board.addEventListener('dblclick',function(event){
//   //   event.target.style.backgroundColor = 'yellow';
//   // });
//   // board.addEventListener('mouseover',function(event){
//   //   event.target.style.backgroundColor = 'green';
//   board.addEventListener('click',addX);
// });
//
// var centinel=true;
//
// function addX(event ) {
//   if(event.target.matches('td') && event.target.textContent===''){
//     if (centinel)
//       event.target.textContent='X';
//     else
//       event.target.textContent='O';
//    centinel= !centinel;
//   }
// }

window.onload = function() {
    var board = document.querySelector('.board-js');

board.addEventListener('click', addX);
};
var centinel = true;
function addX(event){
    if(event.target.matches('td') && event.target.textContent === ''){
        if(centinel) {
            event.target.textContent= 'X';
        centinel = false;
        } else {
            event.target.textContent='0';
        centinel = !centinel;
        }
    }
  }
