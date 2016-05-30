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
  games.updateGame(req.params.gameId, req.body)
  .then(function(data){
    res.status(200);
    res.send('updated');
  });
});


// thinking -- playing --- debugging
app.get('/test/:num', function(req, res) {
  var createPath = __dirname.split('/');
  createPath.pop();
  createPath = createPath.join('/');
  createPath += '/public/test.html';
  // console.log('from test', createPath, req.hostname, __dirname);
  console.log('from test', req.params.num);
  // res.sendFile(createPath);

  var str = "<!DOCTYPE html><html><body><div><h1>Loading ... </h1></div><script>" +
      "window.location.href = window.location.origin + '/#/start';" +
      "</script></body></html>";
  res.send(str);
});
// ------------till here

app.listen(port, function() {
  console.log('App is listening on port 3000...');
});