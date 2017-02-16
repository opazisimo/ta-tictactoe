var yo = require('yo-yo');
var layout = require('../layout');

var jugadores = yo`      <div class="dos">
        <div class="row">
          <div class="col-md-6 text-center col-xs-12">
            <p>Ingrese el nombre del jugador 1 <strong>(X)</strong></p>
          </div>
          <div class="col-md-6 col-xs-12">
            <input id="player1" type="text" placeholder="Jugador 1"/ >
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 text-center col-xs-12">
            <p>Ingrese el nombre del jugador 2 <strong>(O)</strong></p>
          </div>
          <div class="col-md-6 col-xs-12">
            <input id="player2" type="text" placeholder="Jugador 2" />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 text-center">
            <a class="btn btn-lg boton sep" id="comenzar">Comenzar</a>
          </div>
        </div>
      </div>`;

module.exports = layout(jugadores);