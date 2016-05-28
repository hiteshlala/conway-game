angular.module('conway.start', [])

.controller('StartController', function($scope, createUniverse, universeData, $cookies) {
  $scope.data = universeData;

  // $scope.startState = createUniverse.genUniverse($cookies.get('rows'), $cookies.get('cols'));

  // d3node = '.startCondition';

  // $scope.dosomething = function() {
  //   $scope.startState[1][1] = $scope.startState[1][1] ? 0: 1;
  //   console.log('from dosomething $scope.startState[1][1]',$scope.startState[1][1]);
  // };
  
  // createUniverse.drawGrid(d3node, $scope.startState);

  // $scope.flipColor = function(a) {
  //   console.log("i get here", a);
  // };

  // // helper function : toggles a square color and alive state
  // var toggleState = function(elementdata, element) {
  //   elementdata.alive = elementdata.alive ? 0 : 1;
  //   var newColor =  elementdata.alive ? 'red' : 'white';
  //   d3.select(element).attr('fill', newColor);
    
  //   $scope.$apply(function(){
  //     $scope.startState[elementdata.y][elementdata.x] = elementdata.alive == 0 ?  1 : 0;
      
  //   });
  // };

  // d3.selectAll('rect').on('click', function(e){toggleState(e,this);});



});

// .factory('createUniverse', function(){

//   // generates an m by n matrix with 0 or 1 as entries asigned randomly
//   var genUniverse = function (m, n) {
//     var state = function() {
//       return Math.random() > 0.5 ? 1 : 0;
//     };
//     var cells = [];
//     for(var i = 0; i < m; i++) {
//         cells.push([]);
//         for(var j = 0; j < n; j++) {
//             cells[i].push(state());
//         }
//     }
//     return cells;
//   };


//   // draw rectangular grid with d3 that corresponds to the
//   // input grid, the color of each square will corresond
//   // to the value at a grid location 1 = color, 0 = no-color
//   // attatch the canvas to given dom element
//   var drawGrid = function(node, matrix) {
//     //generate data array
//     var cell = [];
//     matrix.forEach(function(row, i) {
//       row.forEach(function(col, j) {
//         cell.push({
//           y: i,
//           x: j,
//           alive: matrix[i][j]
//         });
//       });
//     });

    
//     var width = 100;
//     var height = 100;
//     var xfact = Math.round(width/matrix.length);
//     var yfact = Math.round(height/matrix[0].length);

//     var svg = d3.select(node)
//       .append('svg')
//       .attr('width', width)
//       .attr('height', height)
//       .selectAll('rect')
//       .data(cell)
//       .attr('x', function(d){return d.x * xfact;})
//       .attr('y', function(d){return d.y * yfact;})
//       .attr('fill', function(){return d.alive? 'blue' : 'white';})
//       .attr('width', xfact - 2)
//       .attr('height', yfact - 2)
//       .enter().append('rect')
//       .attr('x', function(d){return d.x * xfact;})
//       .attr('y', function(d){return d.y * yfact;})
//       .attr('fill', function(d){return d.alive? 'red' : 'white';})
//       .attr('width', xfact - 2)
//       .attr('height', yfact - 2)
//       // .on('click', function(e){toggleState(e,this);})
//       // .style('fill', 'blue');
//       // .data()
//       ;
//   };

//   // get the next generation 
//   var nextGeneration = function (cells) {
//     var m = cells.length;
//     var n = m > 0 ? n = cells[0].length : 0;
    
//     var next = genEmptyCells(m, n);
//     var getValue = function(matrix, i, j) {
//         return matrix[i] && matrix[i][j] || 0;
//     };

//     for(var i = 0; i < m; i++) {
//       for(var j = 0; j < n; j++) {
//         // check eight neighbors
//         var count = getValue(cells, i-1, j-1) +
//           getValue(cells, i-1, j) +
//           getValue(cells, i-1, j+1) +
//           getValue(cells, i, j-1) +
//           getValue(cells, i, j+1) +
//           getValue(cells, i+1, j-1) +
//           getValue(cells, i+1, j) +
//           getValue(cells, i+1, j+1);

//         if((count === 3) ) {
//           next[i][j] = 1;
//         } else if(count === 2 && cells[i][j] === 1) {
//           next[i][j] = 1;
//         } else {
//           next[i][j] = 0;
//         }
//       }//for(j)
//     }//for(i)

//     return next;
//   };

//   return {
//     genUniverse: genUniverse,
//     nextGeneration: nextGeneration,
//     drawGrid: drawGrid
//   };

// });
