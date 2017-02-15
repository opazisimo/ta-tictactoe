var yo = require('yo-yo');
var layout = require('../layout');
var historia = require('../historia');

var guardaclick = sessionStorage.getItem('guardaclick');
var guardactx = sessionStorage.getItem('guardactx');
var pl1 = sessionStorage.getItem('pl1');
var pl2 = sessionStorage.getItem('pl2');
var historial = function(story){
 return yo`<div class="cuatro">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1 text-center">
            <h3 clase="titulo">Historial</h3>
            <div id="cajahistorial">
              ${story}
            </div>
          </div>
        </div>
      </div>`;
}
function defineGanador(){
  if(parseInt(guardaclick) > parseInt(guardactx)){
    return historia(pl1,pl2,guardaclick);
  } else {
    return historia(pl2,pl1,guardactx);
  }
}
module.exports = layout(historial(defineGanador()));