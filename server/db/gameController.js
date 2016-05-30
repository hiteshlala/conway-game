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

  updateGame: function(gameId, data) {
    return Games.findByIdAndUpdate(
      gameId,
      {
        currentState: data.currentState,
        cycles: data.cycles
      },
      {
        new: true
      }
    );
  },

  getGame: function(gameId) {
    return Games.findById(gameId);
  }

};
