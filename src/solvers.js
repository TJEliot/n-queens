/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that 
//none of them can attack each other



window.findNRooksSolution = function(n) {
  //debugger;
  var solution = [];
  for (var i = 0; i < n; i++) {
    var thisRow = [];
    for (var j = 0; j < n; j++) {
      if (j === i){
        thisRow[j] = 1;
      } else {
        thisRow[j] = 0;
      }
    }
    solution.push(thisRow);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
      return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that 
//none of them can attack each other

window.countNRooksSolutions = function(n) {
  var counter = 1;
  for (var i = 1; i <= n; i++) {
    counter *= i;
  }
  console.log('Number of solutions for ' + n + ' rooks:', counter);
  return counter;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that 
//none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  
  /*

We know that for an n x n board, there are n! legitimate rook placements
  we also know that we can describe that as a number/array, like for n = 3 we have 
[ [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]  ]
so we make all the arrays above, and store them in a bigger array
we know there must be a 1:1 function that maps those n-tuples to board positions
  make that function
  pass it the above array, store the result in a newArray
now we have an array of all legal board positions for n rooks 
now run that array through hasAnyDiagonalConflicts, and remove any arrays that do 
voila! now we have an array of all the legal queen placements

*/

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that 
//none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
