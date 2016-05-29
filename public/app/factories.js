angular.module('conway')
.factory('createUniverse', function(){

  // generates an m by n matrix with 0 or 1 as entries asigned randomly
  var genUniverse = function (m, n, random) {
    var state = function() {
      if(random) {
        return Math.random() > 0.5 ? 1 : 0;
      } else {
        return 0;
      }
    };
    var cells = [];
    for(var i = 0; i < m; i++) {
        cells.push([]);
        for(var j = 0; j < n; j++) {
            cells[i].push(state());
        }
    }
    return cells;
  };

  // draw rectangular grid with d3 that corresponds to the
  // input grid, the color of each square will corresond
  // to the value at a grid location 1 = color, 0 = no-color
  // attatch the canvas to given dom element
  var drawGrid = function(node, matrix) {
    //generate data array
    var cell = [];
    matrix.forEach(function(row, i) {
      row.forEach(function(col, j) {
        cell.push({
          y: i,
          x: j,
          alive: matrix[i][j]
        });
      });
    });

    var maxWidth = document.documentElement.clientWidth;
    var maxHeigth =  document.documentElement.clientHeight;
    var width = maxWidth * 0.8;
    var height = maxHeigth * 0.8;
    var xfact = Math.round(width/matrix[0].length);
    var yfact = Math.round(height/matrix.length);

    var svg = d3.select(node)
      .append('svg')
      .attr('width', maxWidth)//width )
      .attr('height', maxHeigth)//height )
      .selectAll('rect')
      .data(cell)
      .attr('x', function(d){return d.x * xfact;})
      .attr('y', function(d){return d.y * yfact;})
      .attr('fill', function(){return d.alive? 'blue' : 'white';})
      .attr('width', xfact - 2)
      .attr('height', yfact - 2)
      .enter().append('rect')
      .attr('x', function(d){return d.x * xfact;})
      .attr('y', function(d){return d.y * yfact;})
      .attr('fill', function(d){return d.alive? 'red' : 'white';})
      .attr('width', xfact - 1)
      .attr('height', yfact - 1)
      .attr('stroke', ' #DCDCDC')
      .attr('stroke-width', 0.5)
      // .on('click', function(e){toggleState(e,this);})
      // .style('fill', 'blue');
      // .data()
      ;
  };

  // remove d3 matrix from dom node
  var clearGrid = function(node) {
    d3.select(node).selectAll('*').remove();
  };

  // adds click event listener on all cells in universe
  var makeClickable = function(node, universe) {
    d3.select(node).selectAll('rect').on('click', function(e){
      universe[e.y][e.x] = universe[e.y][e.x] ? 0 : 1;
      e.alive = e.alive ? 0 : 1;
      var color = e.alive ? 'red' : 'white';
      this.setAttribute('fill', color);
    });
  };

  // generate a matrix of empty cells
  var genEmptyCells = function(m, n) {
    var empty = [];
    for(var i = 0; i < m; i++) {
      empty.push(new Array(n));
    }
    return empty;
  };

  // get the next generation 
  var nextGeneration = function (cells) {
    var m = cells.length;
    var n = m > 0 ? n = cells[0].length : 0;
    
    var next = genEmptyCells(m, n);
    var getValue = function(matrix, i, j) {
        return matrix[i] && matrix[i][j] || 0;
    };

    for(var i = 0; i < m; i++) {
      for(var j = 0; j < n; j++) {
        // check eight neighbors
        var count = getValue(cells, i-1, j-1) +
          getValue(cells, i-1, j) +
          getValue(cells, i-1, j+1) +
          getValue(cells, i, j-1) +
          getValue(cells, i, j+1) +
          getValue(cells, i+1, j-1) +
          getValue(cells, i+1, j) +
          getValue(cells, i+1, j+1);

        if((count === 3) ) {
          next[i][j] = 1;
        } else if(count === 2 && cells[i][j] === 1) {
          next[i][j] = 1;
        } else {
          next[i][j] = 0;
        }
      }//for(j)
    }//for(i)

    return next;
  };

  return {
    genUniverse: genUniverse,
    nextGeneration: nextGeneration,
    drawGrid: drawGrid,
    clearGrid: clearGrid,
    makeClickable: makeClickable,
  };

})

.factory('universeData', function(createUniverse) {
  var initial = createUniverse.genUniverse(10, 10, true);
  var data =  {
    gameId: null,
    rows: 10,
    cols: 10,
    cycles: 0,
    timeIncrement: 250,
    startState: initial,
    currentState:[[]]
  };
 
  return data;
})

.factory('gameController', function($http) {

  var createGame = function(data) {
    return $http({
      method: 'POST',
      url: 'game/create',
      data: data
    });
  };

  var updateGame = function(data) {
    return $http({
      method: 'PUT',
      url: 'game/' + data.gameId,
      data: data
    });
  };

  var getGame = function(gameId) {
    return $http({
      method: 'GET',
      url: 'game/' + gameId
    });
  };

  return {
    createGame: createGame,
    updateGame: updateGame
  };
});
