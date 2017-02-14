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
      console.log(equis.lenght);
      check();
    });
    div.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        div.innerHTML = o;
        oes.push(o);
        check();
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


  function check(){
  if (tablero.a1.innerHTML == 'X') {
      if (tablero.a2.innerHTML == 'X') {
        if (tablero.a3.innerHTML == 'X') {
          alert('Ganó X')
        }
      }
      if (tablero.b2.innerHTML == 'X') {
        if (tablero.c3.innerHTML == 'X') {
          alert('Ganó X')
        }
      }
       if (tablero.b1.innerHTML == 'X') {
        if (tablero.c1.innerHTML == 'X') {
          alert('Ganó X')
        }
      }
    }
    if (tablero.a2.innerHTML == 'X') {
      if (tablero.b2.innerHTML == 'X') {
        if (tablero.c2.innerHTML == 'X') {
          alert('Ganó X')
        }
      }
    }
    if (tablero.a3.innerHTML == 'X') {
      if (tablero.b2.innerHTML == 'X') {
        if (tablero.c1.innerHTML == 'X') {
          alert('Ganó X')
        }
      }
      if (tablero.b3.innerHTML == 'X') {
        if (tablero.c3.innerHTML == 'X') {
          alert('Ganó X')
        }
      }
    }
    if (tablero.b1.innerHTML == 'X') {
      if (tablero.b2.innerHTML == 'X') {
        if (tablero.b3.innerHTML == 'X') {
          alert('Ganó X')
        }
      }
    }
    if (tablero.c1.innerHTML == 'X') {
      if (tablero.c2.innerHTML == 'X') {
        if (tablero.c3.innerHTML == 'X') {
          alert('Ganó X')
        }
      }
    }

  //o
  if (tablero.a1.innerHTML == 'O') {
      if (tablero.a2.innerHTML == 'O') {
        if (tablero.a3.innerHTML == 'O') {
          alert("ganoo O")
        }
      }
      if (tablero.b2.innerHTML == 'O') {
        if (tablero.c3.innerHTML == 'O') {
          alert("ganoo O")
        }
      }
       if (tablero.b1.innerHTML == 'O') {
        if (tablero.c1.innerHTML == 'O') {
          alert("ganoo O")
        }
      }
    }
    if (tablero.a2.innerHTML == 'O') {
      if (tablero.b2.innerHTML == 'O') {
        if (tablero.c2.innerHTML == 'O') {
          alert("ganoo O")
        }
      }
    }
    if (tablero.a3.innerHTML == 'O') {
      if (tablero.b2.innerHTML == 'O') {
        if (tablero.c1.innerHTML == 'O') {
          alert("ganoo O")
        }
      }
      if (tablero.b3.innerHTML == 'O') {
        if (tablero.c3.innerHTML == 'O') {
          alert("ganoo O")
        }
      }
    }
    if (tablero.b1.innerHTML == 'O') {
      if (tablero.b2.innerHTML == 'O') {
        if (tablero.b3.innerHTML == 'O') {
          alert("ganoo O")
        }
      }
    }
    if (tablero.c1.innerHTML == 'O') {
      if (tablero.c2.innerHTML == 'O') {
        if (tablero.c3.innerHTML == 'O') {
          alert("ganoo O")
        }
      }
    }
  }
});
