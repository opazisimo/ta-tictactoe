var yo = require('yo-yo');

var turni = 'hola';

module.exports = function turno(){
    return yo`<h3 clase="titulo">Turno de ${turni}</h3>`;
  }