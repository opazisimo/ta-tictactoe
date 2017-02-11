var yo = require('yo-yo');
var layout = require('../layout');

var juego = yo`      <div class="tres">
        <div class="row">
          <div class="text-center col-xs-12">
            <h3 clase="titulo">Turno de Irene</h3>
          </div>
        </div>
        <div class="row">
          <div class="tablero">
            <div class="col-md-4 col-md-offset-4 col-xs-12">
              <div class="row">
                <div class="col-xs-4 gato bajo">
                  <p class="resp" id="a1">O</p>
                </div>
                <div class="col-xs-4 gato lado bajo">
                  <p class="resp" id="a2">O</p>
                </div>
                <div class="col-xs-4 gato bajo">
                  <p class="resp" id="a3">X</p>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-4 gato bajo">
                  <p class="resp" id="b1">X</p>
                </div>
                <div class="col-xs-4 gato lado bajo">
                  <p class="resp" id="b2">O</p>
                </div>
                <div class="col-xs-4 gato bajo">
                  <p class="resp" id="b3">X</p>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-4 gato">
                  <p class="resp" id="c1">O</p>
                </div>
                <div class="col-xs-4 gato lado">
                  <p class="resp" id="c2">X</p>
                </div>
                <div class="col-xs-4 gato">
                  <p class="resp" id="c3">O</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <p>Movimientos Emmanuel: 3</p>
            <p>Movimientos Irene: 2</p>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 text-center sep">
            <p>Ganó Emmanuel!</p> <button class="btn boton">Mandar al historial</button>
          </div>
        </div>
      </div>`;

module.exports = layout(juego);