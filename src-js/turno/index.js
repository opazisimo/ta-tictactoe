var yo = require('yo-yo');
var pl1 = sessionStorage.getItem('pl1');

module.exports = function turno(){
    return yo`<h3 clase="titulo" id='turnoactual'>Turno de ${pl1}</h3>`;
  }