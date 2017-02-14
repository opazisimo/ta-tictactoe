var yo = require('yo-yo');
var gato = require('../gato');
var turno = require('../turno');
var tablero = require('../tablero');
var movs = require('../movs');
//
module.exports = gato(turno(), tablero(), movs());