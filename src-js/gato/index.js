var yo = require('yo-yo');

module.exports = function gato(turno, tablero, movs){
  return yo`
      <div class="tres col-xs-12">
        <div class="row">
          <div class="text-center col-xs-12">
            ${turno}
          </div>
        </div>
        <div class="row">
          ${tablero}
          ${movs}
        </div>
        <div class="row">
          <div class="col-xs-12 text-center sep">
            <p><strong id='ganador'></strong></p> <button class="btn boton">Mandar al historial</button>
          </div>
        </div>
      </div>`;

}
