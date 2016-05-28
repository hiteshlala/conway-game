angular.module('conway.home', [])
.controller('HomeController', function($scope, $location, universeData, createUniverse) {
  // load inital data for start state of universe
  $scope.data = universeData;

  // DOM node to which will attach the univere using D3
  var node = '.startState';

  // draw inital random universe on dom and allow user to make changes
  // by clicking on rectangles which toggles the corresponding
  // state value and color
  createUniverse.drawGrid(node, $scope.data.startState);
  createUniverse.makeClickable(node, $scope.data.startState);
 
  // update the size of universe when row and column is changed
  // generates a new random universe of correct size
  // clears DOM of old universe
  // draws new universe on DOM
  $scope.resize = function() {
    $scope.data.startState = createUniverse.genUniverse($scope.data.rows, $scope.data.cols);
    createUniverse.clearGrid(node);
    createUniverse.drawGrid(node, $scope.data.startState);
    createUniverse.makeClickable(node, $scope.data.startState);
  };

  // start the iterations, evolving the universe
  // save universe start state to database
  // redirect to start page which iterates the universe
  $scope.start = function() {
    console.log('Start', $scope.data); // debug
    // $location.url('/start');
    
    // testing
    $scope.data.startState = createUniverse.nextGeneration($scope.data.startState);
    createUniverse.clearGrid(node);
    createUniverse.drawGrid(node, $scope.data.startState);
  };


});

