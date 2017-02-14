var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/juego', function(ctx, next){
  title('Gato Locoo - A Jugar!');
  var main = document.getElementById('screen');
  empty(main).appendChild(template);

  var tablero = {
    t : document.getElementById('tablero'),
    a1 : document.getElementById('a1'),
    a2 : document.getElementById('a2'),
    a3 : document.getElementById('a3'),
    b1 : document.getElementById('b1'),
    b2 : document.getElementById('b2'),
    b3 : document.getElementById('b3'),
    c1 : document.getElementById('c1'),
    c2 : document.getElementById('c2'),
    c3 : document.getElementById('c3')
  };
  var x = 'X';
  var o = 'O';
  var equis = [];
  var oes = [];

  function clickear(div){
    div.addEventListener('click', function(){
      div.innerHTML =  x;
      equis.push(x);
      var xguarda = sessionStorage.setItem('xguarda', equis.length);
      console.log(xguarda);
      check();
      document.getElementById('turnoactual').innerHTML = 'Turno de ' + pl2;

    });
    div.addEventListener('contextmenu', function(event) {
      event.preventDefault();
        div.innerHTML = o;
        oes.push(o);
        var oguarda = sessionStorage.setItem('oguarda', oes.length);
        console.log(oguarda);
        check();
        document.getElementById('turnoactual').innerHTML = 'Turno de ' + pl1;
    }, false);
  }
  clickear(tablero.a1);
  clickear(tablero.a2);
  clickear(tablero.a3);

  clickear(tablero.b1);
  clickear(tablero.b2);
  clickear(tablero.b3);

  clickear(tablero.c1);
  clickear(tablero.c2);
  clickear(tablero.c3);

  var pl1 = sessionStorage.getItem('pl1');
  var pl2 = sessionStorage.getItem('pl2');

  function check(){
  if (tablero.a1.innerHTML == 'X') {
      if (tablero.a2.innerHTML == 'X') {
        if (tablero.a3.innerHTML == 'X') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl1;
        }
      }
      if (tablero.b2.innerHTML == 'X') {
        if (tablero.c3.innerHTML == 'X') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl1;
        }
      }
       if (tablero.b1.innerHTML == 'X') {
        if (tablero.c1.innerHTML == 'X') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl1;
        }
      }
    }
    if (tablero.a2.innerHTML == 'X') {
      if (tablero.b2.innerHTML == 'X') {
        if (tablero.c2.innerHTML == 'X') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl1;
        }
      }
    }
    if (tablero.a3.innerHTML == 'X') {
      if (tablero.b2.innerHTML == 'X') {
        if (tablero.c1.innerHTML == 'X') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl1;
        }
      }
      if (tablero.b3.innerHTML == 'X') {
        if (tablero.c3.innerHTML == 'X') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl1;
        }
      }
    }
    if (tablero.b1.innerHTML == 'X') {
      if (tablero.b2.innerHTML == 'X') {
        if (tablero.b3.innerHTML == 'X') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl1;
        }
      }
    }
    if (tablero.c1.innerHTML == 'X') {
      if (tablero.c2.innerHTML == 'X') {
        if (tablero.c3.innerHTML == 'X') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl1;
        }
      }
    }

  //o
  if (tablero.a1.innerHTML == 'O') {
      if (tablero.a2.innerHTML == 'O') {
        if (tablero.a3.innerHTML == 'O') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl2;
        }
      }
      if (tablero.b2.innerHTML == 'O') {
        if (tablero.c3.innerHTML == 'O') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl2;
        }
      }
       if (tablero.b1.innerHTML == 'O') {
        if (tablero.c1.innerHTML == 'O') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl2;
        }
      }
    }
    if (tablero.a2.innerHTML == 'O') {
      if (tablero.b2.innerHTML == 'O') {
        if (tablero.c2.innerHTML == 'O') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl2;
        }
      }
    }
    if (tablero.a3.innerHTML == 'O') {
      if (tablero.b2.innerHTML == 'O') {
        if (tablero.c1.innerHTML == 'O') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl2;
        }
      }
      if (tablero.b3.innerHTML == 'O') {
        if (tablero.c3.innerHTML == 'O') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl2;
        }
      }
    }
    if (tablero.b1.innerHTML == 'O') {
      if (tablero.b2.innerHTML == 'O') {
        if (tablero.b3.innerHTML == 'O') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl2;
        }
      }
    }
    if (tablero.c1.innerHTML == 'O') {
      if (tablero.c2.innerHTML == 'O') {
        if (tablero.c3.innerHTML == 'O') {
          document.getElementById('ganador').innerHTML = 'Ganó ' + pl2;
        }
      }
    }
  }
  var mandarHistorial = document.getElementById('mandarHistorial');

  mandarHistorial.addEventListener('click', function(){
      window.location = '/historial';
  });
});
