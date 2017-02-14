var yo = require('yo-yo');

module.exports = function movs(){

  var pl1 = sessionStorage.getItem('pl1');
  var pl2 = sessionStorage.getItem('pl2');
  var xguarda = sessionStorage.getItem('xguarda');
  var oguarda = sessionStorage.getItem('oguarda');

  return yo`
          <div class="col-md-4 col-xs-12">
            <p>Movimientos ${pl1}: <em>${xguarda}</em></p>
            <p>Movimientos ${pl2}: <em>${oguarda}</em></p>
          </div>`;

};

