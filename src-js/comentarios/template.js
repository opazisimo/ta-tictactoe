var yo = require('yo-yo');
var layout = require('../layout');
var tituloHistoria = document.createTextNode(sessionStorage.getItem('tituloHistoria'));

var coment = function(historia){
  return yo`<div class="cuatro">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1 text-center">
            <h3 clase="titulo">${historia}</h3>
            <div id="comBox" class="cajacomentarios">
              <div id="firstCom" class="comentario">
                <p class="nombre">No hay comentarios :(</p>
              </div>
            </div>
            <div class="formulario text-center">
              <h4 class="titulo">Agrega un comentario</h4>
              <input type="text" id="nombreform" placeholder="Nombre" />
              <textarea name="comentario" id="comentarioform" placeholder="Comentario" cols="30" rows="10"></textarea>
              <button class="btn boton sep" id="agregarcomentario">Agregar Comentario</button>
            </div>
          </div>
        </div>
      </div>`;
}

module.exports = layout(coment(tituloHistoria));