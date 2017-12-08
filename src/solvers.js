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

// window.generateNDigits = function(n) {
//   var arr = [];
//   if (n <= 1) {
//     return [1];
//   } else {
//     for (var i = 0; i < n; i++) {
//       for (var j = 0; j < n; j++) {
//         if (n === 2) {
//           if (!areAnyEqual(i, j)) {
//             arr.push([i ,j]);
//           }
//         } else {
//           for (var k = 0; k < n; k++) {
//             if (n === 3) {
//               if (!areAnyEqual(i, j, k)) {
//                 arr.push([i, j, k]);
//               }
//             } else {
//               for (var l = 0; l < n; l++) {
//                 if (n === 4) {
//                   if (!areAnyEqual(i, j, k ,l)) {
//                     arr.push([i, j, k, l]);
//                   } 
//                 } else {
//                   for (var m = 0; m < n; m++) {
//                     if (n === 5) {
//                       if (!areAnyEqual(i, j, k, l, m)) {
//                         arr.push([i, j, k, l, m]);
//                       }
//                     } else {
//                       for (var o = 0; o < n; o++) {
//                         if (n === 6) {
//                           if (!areAnyEqual(i, j, k, l, m, o)) {
//                             arr.push([i, j, k, l, m, o]);
//                           } 
//                         } else {
//                           for (var p = 0; p < n; p++) {
//                             if (n === 7) {
//                               if (!areAnyEqual(i, j, k, l, m, o, p)) {
//                                 arr.push([i, j, k, l, m, o, p]);
//                               }
//                             } else {
//                               for (var q = 0; q < n; q++) {
//                                 if (n === 8) {
//                                   if (!areAnyEqual(i, j, k, l, m, o, p, q)) {
//                                     arr.push([i, j, k, l, m, o, p, q]);
//                                   }  
//                                 } else {
//                                   console.error("cannot take n: " + n); 
//                                 }
//                               } 
//                             }
//                           }
//                         }
//                       }
//                     } 
//                   }
//                 }
//               }
//             }
//           } 
//         }
//       }
//     }
//   }
//   return arr;
// }

// window.rookGenerator = function(arr) {
//   var returner = [];
//   if (arr.length === 0){
//     return [];
//   }
//   var howLong = arr[0].length;
//   for (var j = 0; j < arr.length; j++){
//     var ourRow = Array(howLong).fill(0);
//     var ourArray = [];
//     // so if we're looking for nxn matrices, this gives
//     // us a single n long array full of 0s
//     for (var i = 0; i < howLong; i++) {
//       ourArray.push(ourRow.slice());
//     }
//     //now ourArray is an nxn matrix with all 0s
//     for (var i = 0; i < howLong; i++) {
//       if (i === howLong-1){
//         ourArray[arr[j][i]][arr[j][0]] = 1;
//       } else {
//         ourArray[arr[j][i]][arr[j][i+1]] = 1;
//       }
//     }
//     returner.push(ourArray);
//   }
//   console.log(returner);
//   return returner;
// }

// window.areAnyEqual = function(){
//   for (var i = 0; i < arguments.length; i++) {
//     for (var j = 0; j < arguments.length; j++) {
//       if (arguments[i] === arguments[j] && i !== j) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  
  findSolution(0, n, board, "hasAnyRooksConflicts", function(){
    solution = _.map(board.rows(), function(row){
      return row.slice();
    });
  });
  // var solution = [];
  // for (var i = 0; i < n; i++) {
  //   var thisRow = [];
  //   for (var j = 0; j < n; j++) {
  //     if (j === i){
  //       thisRow[j] = 1;
  //     } else {
  //       thisRow[j] = 0;
  //     }
  //   }
  //   solution.push(thisRow);
  // }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
      return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that 
//none of them can attack each other

window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});
  
  
  findSolution(0, n, board, "hasAnyRooksConflicts", function(){
    solutionCount++;
  });
  return solutionCount;
  // var counter = 1;
  // for (var i = 1; i <= n; i++) {
  //   counter *= i;
  // }
  // console.log('Number of solutions for ' + n + ' rooks:', counter);
  // return counter;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that 
//none of them can attack each other
// window.findNQueensSolutionA = function(num) {
//   var solution = [];
//   // if (num === 0){
//   //   solution = [[]];
//   // }
//   // if (num === 2 || num === 3){
//   //   solution = new Board({n: num});  
//   // }
//   //call generateNDigits
//   var ourDigits = this.generateNDigits(num);
//   console.log(ourDigits);
//   //feed the result into rookGenerator
//   var ourRooks = this.rookGenerator(ourDigits);
//   //feed the result of that into hasMajorDiagonalConflictAt, removing any that do
//   // gotta turn our matrices into boards first
  
  
//   var ourQueens = ourRooks.filter(function(element){
//     var board = new Board(element);
//     return !board.hasAnyMajorDiagonalConflicts() && !board.hasAnyMinorDiagonalConflicts() && !board.hasAnyColConflicts() && !board.hasAnyRowConflicts(); 
//   });
  
//   //the result of that is our answer!
//   //the length of that is the answer to countNQueensSolutions
  
//   //var solution = ourQueens.length; //fixme
  
//   /*

// We know that for an n x n board, there are n! legitimate rook placements
//   we also know that we can describe that as a number/array, like for n = 3 we have 
// [ [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]  ]
// so we make all the arrays above, and store them in a bigger array
// we know there must be a 1:1 function that maps those n-tuples to board positions
//   make that function
//   pass it the above array, store the result in a newArray
// now we have an array of all legal board positions for n rooks 
// now run that array through hasAnyDiagonalConflicts, and remove any arrays that do 
// voila! now we have an array of all the legal queen placements

// */

//   console.log('Single solution for ' + num + ' queens:', JSON.stringify(ourQueens[0]));
//   return ourQueens;
// };

window.findNQueensSolution = function(n) { 
  var board = new Board({n:n});
  if (n === 0){
    return [];
  }
  if (n === 1){
    return [[1]];
  }
  if (n === 2){
    return [[],[]];
  }
  if (n === 3){
    return [[], [], []];
  }
  findSolution(0, n, board, "hasAnyQueensConflicts", function(){
    solution = _.map(board.rows(), function(row){
      return row.slice();
    });
  });
  // return this.findNQueensSolutionA(num)[0];
  return solution;
}

window.findSolution = function(row, n, board, validator, callback) {
  
  if (row === n){
    callback();
    return;
  } 

  for (var i = 0; i < n; i++) {
    board.togglePiece(row, i);
    if (!board[validator]()) {
      findSolution(row + 1, n, board, validator, callback);
    }
    board.togglePiece(row, i);
  }
}

// return the number of nxn chessboards that exist, with n queens placed such that 
//none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});
  
  findSolution(n);
  findSolution(0, n, board, "hasAnyQueensConflicts", function(){
    solutionCount++;
  });
  return solutionCount;
  // var solutionCount = this.findNQueensSolutionA(n).length; 
  

  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
 
  // return solutionCount;
};
