var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/conway');

var games = require('./db/gameController.js');

var port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

app.post('/game/create', function(req, res) {
  var game = games.createGame(req.body);
  res.send(game);
});

app.get('/game/:gameId', function(req, res) {
  games.getGame(req.params.gameId)
  .then(function(data){
    res.send(data);
  });

});

app.put('/game/:gameId', function(req, res) {
  console.log('game updated'); // on server
  
  res.status(200);
  res.send('updated');
});


app.listen(port, function() {
  console.log('App is listening on port 3000...');
});