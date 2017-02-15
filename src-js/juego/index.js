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
      check();
      document.getElementById('turnoactual').innerHTML = 'Turno de ' + pl2;

    });
    div.addEventListener('contextmenu', function(event) {
      event.preventDefault();
        div.innerHTML = o;
        oes.push(o);
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

  var clicks = 0;
  var clCtx = 0;
  function clickME(div) {
    div.addEventListener('click', function(){
      clicks += 1;
      document.getElementById('clicks1').innerHTML = clicks;
      var guardaclick = sessionStorage.setItem('guardaclick', clicks);
    });
    div.addEventListener('contextmenu', function(){
      clCtx += 1;
      document.getElementById('clicks2').innerHTML = clicks;
      var guardactx = sessionStorage.setItem('guardactx', clCtx);
    });
  }
  clickME(tablero.a1);
  clickME(tablero.a2);
  clickME(tablero.a3);
  clickME(tablero.b1);
  clickME(tablero.b2);
  clickME(tablero.b3);
  clickME(tablero.c1);
  clickME(tablero.c2);
  clickME(tablero.c3);

  var pl1 = sessionStorage.getItem('pl1');
  var pl2 = sessionStorage.getItem('pl2');
  var ganadorJuego = document.getElementById('ganador');
  function check(){
  if (tablero.a1.innerHTML == 'X') {
      if (tablero.a2.innerHTML == 'X') {
        if (tablero.a3.innerHTML == 'X') {
          ganadorJuego.innerHTML = 'Ganó ' + pl1;
          var guardaclick = sessionStorage.setItem('guardaclick');
        }
      }
      if (tablero.b2.innerHTML == 'X') {
        if (tablero.c3.innerHTML == 'X') {
          ganadorJuego.innerHTML = 'Ganó ' + pl1;
          var guardaclick = sessionStorage.setItem('guardaclick');
        }
      }
       if (tablero.b1.innerHTML == 'X') {
        if (tablero.c1.innerHTML == 'X') {
          ganadorJuego.innerHTML = 'Ganó ' + pl1;
          var guardaclick = sessionStorage.setItem('guardaclick');
        }
      }
    }
    if (tablero.a2.innerHTML == 'X') {
      if (tablero.b2.innerHTML == 'X') {
        if (tablero.c2.innerHTML == 'X') {
          ganadorJuego.innerHTML = 'Ganó ' + pl1;
          var guardaclick = sessionStorage.setItem('guardaclick');
        }
      }
    }
    if (tablero.a3.innerHTML == 'X') {
      if (tablero.b2.innerHTML == 'X') {
        if (tablero.c1.innerHTML == 'X') {
          ganadorJuego.innerHTML = 'Ganó ' + pl1;
          var guardaclick = sessionStorage.setItem('guardaclick');
        }
      }
      if (tablero.b3.innerHTML == 'X') {
        if (tablero.c3.innerHTML == 'X') {
          ganadorJuego.innerHTML = 'Ganó ' + pl1;
          var guardaclick = sessionStorage.setItem('guardaclick');
        }
      }
    }
    if (tablero.b1.innerHTML == 'X') {
      if (tablero.b2.innerHTML == 'X') {
        if (tablero.b3.innerHTML == 'X') {
          ganadorJuego.innerHTML = 'Ganó ' + pl1;
          var guardaclick = sessionStorage.setItem('guardaclick');
        }
      }
    }
    if (tablero.c1.innerHTML == 'X') {
      if (tablero.c2.innerHTML == 'X') {
        if (tablero.c3.innerHTML == 'X') {
          ganadorJuego.innerHTML = 'Ganó ' + pl1;
          var guardaclick = sessionStorage.setItem('guardaclick');
        }
      }
    }

  //o
  if (tablero.a1.innerHTML == 'O') {
      if (tablero.a2.innerHTML == 'O') {
        if (tablero.a3.innerHTML == 'O') {
          ganadorJuego.innerHTML = 'Ganó ' + pl2;
        }
      }
      if (tablero.b2.innerHTML == 'O') {
        if (tablero.c3.innerHTML == 'O') {
          ganadorJuego.innerHTML = 'Ganó ' + pl2;
        }
      }
       if (tablero.b1.innerHTML == 'O') {
        if (tablero.c1.innerHTML == 'O') {
          ganadorJuego.innerHTML = 'Ganó ' + pl2;
        }
      }
    }
    if (tablero.a2.innerHTML == 'O') {
      if (tablero.b2.innerHTML == 'O') {
        if (tablero.c2.innerHTML == 'O') {
          ganadorJuego.innerHTML = 'Ganó ' + pl2;
        }
      }
    }
    if (tablero.a3.innerHTML == 'O') {
      if (tablero.b2.innerHTML == 'O') {
        if (tablero.c1.innerHTML == 'O') {
          ganadorJuego.innerHTML = 'Ganó ' + pl2;
        }
      }
      if (tablero.b3.innerHTML == 'O') {
        if (tablero.c3.innerHTML == 'O') {
          ganadorJuego.innerHTML = 'Ganó+s ' + pl2;
        }
      }
    }
    if (tablero.b1.innerHTML == 'O') {
      if (tablero.b2.innerHTML == 'O') {
        if (tablero.b3.innerHTML == 'O') {
          ganadorJuego.innerHTML = 'Ganó ' + pl2;
        }
      }
    }
    if (tablero.c1.innerHTML == 'O') {
      if (tablero.c2.innerHTML == 'O') {
        if (tablero.c3.innerHTML == 'O') {
          ganadorJuego.innerHTML = 'Ganó ' + pl2;
        }
      }
    }
  }
  var mandarHistorial = document.getElementById('mandarHistorial');

  mandarHistorial.addEventListener('click', function(){
      window.location = '/historial';
  });
});
