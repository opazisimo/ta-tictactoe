var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next){
  title('Gato Locoo');
  var main = document.getElementById('screen');
  empty(main).appendChild(template);

  var botonInicio = document.getElementById('iniciar');

  botonInicio.addEventListener('click', function(){
      window.location = '/jugadores';
  });
})
