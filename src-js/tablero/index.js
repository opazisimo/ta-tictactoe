var yo = require('yo-yo');

module.exports = function tablero(){

    return yo`
            <div class="tablero">
              <div class="col-md-4 col-md-offset-4 col-xs-12">
                <div class="row">
                  <div class="col-xs-4 gato bajo">
                    <p class="resp" id="a1"></p>
                  </div>
                  <div class="col-xs-4 gato lado bajo">
                    <p class="resp" id="a2"></p>
                  </div>
                  <div class="col-xs-4 gato bajo">
                    <p class="resp" id="a3"></p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-4 gato bajo">
                    <p class="resp" id="b1"></p>
                  </div>
                  <div class="col-xs-4 gato lado bajo">
                    <p class="resp" id="b2"></p>
                  </div>
                  <div class="col-xs-4 gato bajo">
                    <p class="resp" id="b3"></p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-4 gato">
                    <p class="resp" id="c1"></p>
                  </div>
                  <div class="col-xs-4 gato lado">
                    <p class="resp" id="c2"></p>
                  </div>
                  <div class="col-xs-4 gato">
                    <p class="resp" id="c3"></p>
                  </div>
                </div>
              </div>
            </div>`;
  }
