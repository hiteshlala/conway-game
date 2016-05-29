var Games = require('./gameModel.js');

module.exports = {

  createGame: function(req) {
    var game = new Games({
      startState: req.startState,
      currentState: req.startState,
      cycles: 0,
      timeIncrement: req.timeIncrement
    });

    game.save(function(err) {
      if(err) {
        console.error(err.message);
      }
    });

    return game;
  },

  updateGame: function(data) {

  },

  getGame: function(gameId) {
    return Games.findById(gameId, function(game) {
      return game;
    });
  }

};
