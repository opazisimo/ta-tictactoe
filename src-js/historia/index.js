var yo = require('yo-yo');

module.exports = function historia(jug1, jug2, mov){
  return yo`  <div class="historial">
                <p>${jug1} le ganó a ${jug2} en ${mov} movimientos</p>
                <button class="btn boton" id="comentar1">Comentar</button>
              </div>`;

}
