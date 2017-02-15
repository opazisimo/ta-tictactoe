var yo = require('yo-yo');

module.exports = function movs(){

  var pl1 = sessionStorage.getItem('pl1');
  var pl2 = sessionStorage.getItem('pl2');

  return yo`
          <div class="col-md-4 col-xs-12">
            <p>Movimientos ${pl1}: <em id="clicks1">0</em></p>
            <p>Movimientos ${pl2}: <em id="clicks2">0</em></p>
          </div>`;

};

