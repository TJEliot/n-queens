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

window.generateNDigits = function(n) {
  var arr = [];
  if (n <= 1) {
    return [1];
  } else {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (n === 2) {
          if (!areAnyEqual(i, j)) {
            arr.push([i ,j]);
          }
        } else {
          for (var k = 0; k < n; k++) {
            if (n === 3) {
              if (!areAnyEqual(i, j, k)) {
                arr.push([i, j, k]);
              }
            } else {
              for (var l = 0; l < n; l++) {
                if (n === 4) {
                  if (!areAnyEqual(i, j, k ,l)) {
                    arr.push([i, j, k, l]);
                  } 
                } else {
                  for (var m = 0; m < n; m++) {
                    if (n === 5) {
                      if (!areAnyEqual(i, j, k, l, m)) {
                        arr.push([i, j, k, l, m]);
                      }
                    } else {
                      for (var o = 0; o < n; o++) {
                        if (n === 6) {
                          if (!areAnyEqual(i, j, k, l, m, o)) {
                            arr.push([i, j, k, l, m, o]);
                          } 
                        } else {
                          for (var p = 0; p < n; p++) {
                            if (n === 7) {
                              if (!areAnyEqual(i, j, k, l, m, o, p)) {
                                arr.push([i, j, k, l, m, o, p]);
                              }
                            } else {
                              for (var q = 0; q < n; q++) {
                                if (n === 8) {
                                  if (!areAnyEqual(i, j, k, l, m, o, p, q)) {
                                    arr.push([i, j, k, l, m, o, p, q]);
                                  }  
                                } else {
                                  console.error("cannot take n: " + n); 
                                }
                              } 
                            }
                          }
                        }
                      }
                    } 
                  }
                }
              }
            }
          } 
        }
      }
    }
  }
  return arr;
}

window.rookGenerator = function(arr) {
  var rookBoard = [];
  for (var i = 0; i < arr.length; i++) {
    var thisRow = [];
    for (var j = 0; j < arr.length; j++) {
      thisRow.push(0);
    }
    rookBoard.push(thisRow);
  }
  for (var i = 0; i < arr.length; i++) {
      if (i >= arr.length-1) {
        rookBoard[arr[i]][arr[0]] = 1;
      } else {
        rookBoard[arr[i]][arr[i + 1]] = 1;        
      }
    }
    console.log('outside of the loops');
    console.log(rookBoard);
    return rookBoard;
}

window.areAnyEqual = function(){
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments.length; j++) {
      if (arguments[i] === arguments[j] && i !== j) {
        return true;
      }
    }
  }
  return false;
}

window.findNRooksSolution = function(n) {
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
  //call generateNDigits
  //feed the result into rookGenerator
  //feed the result of that into hasMajorDiagonalConflictAt, removing any that do
  //feed the result of that into hasMinorDiagonalConflictAt, removing any that do
  //the result of that is our answer!
  //the length of that is the answer to countNQueensSolutions
  
  
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
