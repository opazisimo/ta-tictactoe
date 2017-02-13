var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/jugadores', function(ctx, next){
  title('Gato Locoo - Jugadores!');
  var main = document.getElementById('screen');
  empty(main).appendChild(template);

  var jugador1 = document.getElementById('player1').value;
  var jugador2 = document.getElementById('player2').value;
  var botonComenzar = document.getElementById('comenzar');

  botonComenzar.addEventListener('click', function(){
    if(document.getElementById('player1').value != null ||  jdocument.getElementById('player2').value != 0){
      window.location = '/juego';
    }else{
      alert('Campos obligatorios');
      return false;
    }
  });

})