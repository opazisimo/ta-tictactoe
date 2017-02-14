var yo = require('yo-yo');

module.exports = function gato(jugadorActual, player1, player2, movP1, movP2){
  return yo`
      <div class="tres col-xs-12">
        <div class="row">
          <div class="text-center col-xs-12">
            <h3 clase="titulo">Turno de ${jugadorActual}</h3>
          </div>
        </div>
        <div class="row">
          <div class="tablero">
            <div class="col-md-4 col-md-offset-4 col-xs-12">
              <div class="row">
                <div class="col-xs-4 gato bajo">
                  <p class="resp" id="a1"></p>
                </div>
                <div class="col-xs-4 gato lado bajo">
                  <p class="resp" id="a2"></p>
                </div>
                <div class="col-xs-4 gato bajo">
                  <p class="resp" id="a3"></p>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-4 gato bajo">
                  <p class="resp" id="b1"></p>
                </div>
                <div class="col-xs-4 gato lado bajo">
                  <p class="resp" id="b2"></p>
                </div>
                <div class="col-xs-4 gato bajo">
                  <p class="resp" id="b3"></p>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-4 gato">
                  <p class="resp" id="c1"></p>
                </div>
                <div class="col-xs-4 gato lado">
                  <p class="resp" id="c2"></p>
                </div>
                <div class="col-xs-4 gato">
                  <p class="resp" id="c3"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <p>Movimientos ${player1}: <em>${movP1}</em></p>
            <p>Movimientos ${player2}: <em>${movP2}</em></p>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 text-center sep">
            <p>Ganó Emmanuel!</p> <button class="btn boton">Mandar al historial</button>
          </div>
        </div>
      </div>
      `;
}
