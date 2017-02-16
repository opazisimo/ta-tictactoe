var yo = require('yo-yo');
var layout = require('../layout');

var primerAnuncio = yo`<div class="col-xs-12 text-center uno">
            <h1>Bienvenido a Gato Loco</h1>
            <a href="./jugadores" class="btn btn-lg boton sep" id="iniciar">Iniciar Juego</a>
          </div>`;

module.exports = layout(primerAnuncio);