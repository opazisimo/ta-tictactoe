var yo = require('yo-yo');
var layout = require('../layout');

var historial = yo`      <div class="cuatro">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1 text-center">
            <h3 clase="titulo">Historial</h3>
            <div class="historial">
              <p>Emmanuel le ganó a Irene en 3 movimientos</p>
              <p class="meter"></p>
              <button class="btn boton" id="comentar1">Comentar</button>
            </div>
            <div class="historial">
              <p>Emmanuel le ganó a Eduardo en 4 movimientos</p>
              <button class="btn boton" id="comentar2">Comentar</button>
            </div>
          </div>
        </div>
      </div>`;

module.exports = layout(historial);