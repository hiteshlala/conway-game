var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
  startState: [],
  currentState: [],
  cycles: Number,
  timeIncrement: Number
});

module.exports = mongoose.model('games', gameSchema);