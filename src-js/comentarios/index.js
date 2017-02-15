var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/comentarios', function(ctx, next){
  title('Gato Locoo - Comentarios del Juego');
  var main = document.getElementById('screen');
  empty(main).appendChild(template);
/*

              <div class="comentario">
                <p class="nombre">Andrea dice:</p>
                <p class="comentado">Este es un comentario largo, porque quiero probar qué pasa si escribo más de los caracteres previstos y romper el layout css</p>
              </div>
*/

  var botonComent = document.getElementById('agregarcomentario');
  botonComent.addEventListener('click', function(){
    var caja = document.getElementById('comBox');
    var nombreCom = document.getElementById('nombreform').value;
    var comentado = document.getElementById('comentarioform').value;

    var cajaCom = document.createElement('div');
    cajaCom.setAttribute('class', 'comentario');
    var pNombre = document.createElement('p');
    pNombre.setAttribute('class', 'nombre');
    var pCom = document.createElement('p');
    pCom.setAttribute('class', 'comentado');
    var txNom = document.createTextNode(nombreCom + ' dice:');
    var txCom = document.createTextNode(comentado);
    pNombre.appendChild(txNom);
    pCom.appendChild(txCom);
    cajaCom.appendChild(pNombre);
    cajaCom.appendChild(pCom);
    caja.appendChild(cajaCom);
  })

})
