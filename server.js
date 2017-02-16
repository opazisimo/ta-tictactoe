var express = require('express');
var application = express();

application.set('port',(process.env.PORT || 8086));
application.use(express.static(__dirname + '/dist'));

application.get('/', function(req,res){
  res.render('index');
})

application.get('/jugadores', function(req,res){
  res.render('index');
})

application.listen(application.get('port'), function(){
  console.log('Server en ', application.get('port'));
});
