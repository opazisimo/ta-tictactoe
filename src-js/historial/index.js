var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/historial', function(ctx, next){
  title('Gato Locoo - Historial');
  var main = document.getElementById('screen');
  empty(main).appendChild(template);

  var comentar1 = document.getElementById('comentar1');

  comentar1.addEventListener('click', function(){
      window.location = '/comentarios';
  });

  $.ajax({
      url : 'http://test-ta.herokuapp.com/games',
      data : { id : 1 },
      type : 'GET',
      dataType : 'json',

      success : function(json) {
          alert('eeeh resultó');
          $('<h1/>').text(json.winner_player).appendTo('body');
          $('<div class="content"/>')
              .html(json.html).appendTo('body');
      },

      error : function(xhr, status) {
          alert('Disculpe, existió un problema');
      },

      complete : function(xhr, status) {
          alert('Petición realizada');
      }
  });

})
