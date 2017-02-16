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
      window.location = './comentarios';
  });

  var tituloHistoria = document.getElementById('mensajeHistorial').innerHTML;
  sessionStorage.setItem('tituloHistoria', tituloHistoria);

/*
  $.ajax({
      url : 'http://test-ta.herokuapp.com/games',
      data : { id : 1 },
      type : 'GET',
      dataType : 'json',

      success : function(json) {
          alert('eeeh resultó');
      },

      error : function(xhr, status) {
          alert('Disculpe, existió un problema');
      },

      complete : function(xhr, status) {
          alert('Petición realizada');
      }
  });*/

})
