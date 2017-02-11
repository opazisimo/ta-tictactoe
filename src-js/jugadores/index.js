var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/jugadores', function(ctx, next){
  title('Gato Locoo - Jugadores!');
  var main = document.getElementById('screen');
  empty(main).appendChild(template);
})
