var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/juego', function(ctx, next){
  title('Gato Locoo - A Jugar!');
  var main = document.getElementById('screen');
  empty(main).appendChild(template);

  var a1 = document.getElementById('a1');
  var a2 = document.getElementById('a2');
  var a3 = document.getElementById('a3');

  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var b3 = document.getElementById('b3');

  var c1 = document.getElementById('c1');
  var c2 = document.getElementById('c2');
  var c3 = document.getElementById('c3');

  function clickear(div){
    div.addEventListener('click', function(){
      div.innerHTML = 'X';
    });
    div.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        div.innerHTML = 'O';
    }, false);
  }



  clickear(a1);
  clickear(a2);
  clickear(a3);

  clickear(b1);
  clickear(b2);
  clickear(b3);

  clickear(c1);
  clickear(c2);
  clickear(c3);
});
