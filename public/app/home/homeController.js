angular.module('conway.home', [])
.controller('HomeController', function($scope, $location, $cookies, universeData, createUniverse) {
  // load inital data for start state of universe
  $scope.data = universeData;

  // DOM node to which will attach the univere using D3
  var node = '.startState';

  // draw inital random universe on dom and allow user to make changes
  createUniverse.drawGrid(node, $scope.data.startState);

  // update the size of universe when row and column is changed
  // generates a ndw random universe of correct size
  // clears DOM of old universe
  // draws new universe on DOM
  $scope.resize = function() {
    $scope.data.startState = createUniverse.genUniverse($scope.data.rows, $scope.data.cols);
    createUniverse.clearGrid(node);
    createUniverse.drawGrid(node, $scope.data.startState);
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

  // when a rectangle is clicked toggle the corresponding
  // state value and color
  d3.selectAll('rect').on('click', function(e){
    $scope.data.startState[e.y][e.x] = $scope.data.startState[e.y][e.x] ? 0 : 1;
    e.alive = e.alive ? 0 : 1;
    var color = e.alive ? 'red' : 'white';
    this.setAttribute('fill', color);
  });

  // $scope.inputStart = function() {
  //   $cookies.putObject('rows', $scope.rows);
  //   $cookies.putObject('cols', $scope.cols);
  //   $cookies.putObject('timeInc', $scope.timeIncrement);

  //   $location.url('/entry');
    
  // };

});

