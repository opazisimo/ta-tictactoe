var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/comentarios', function(ctx, next){
  title('Gato Locoo - Comentarios del Juego');
  var main = document.getElementById('screen');
  empty(main).appendChild(template);
})
