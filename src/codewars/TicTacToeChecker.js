// Tic-Tac-Toe Checker

function isSolved(board) {
  let result = 0;
  let finished = true;
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === 0 || board[i][1] === 0 || board[i][2] === 0) {
      finished = false;
    }
    if (
      board[i][0] !== 0 &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    ) {
      result = board[i][0];
    }
  }
  for (let i = 0; i < board.length; i++) {
    if (
      board[0][i] !== 0 &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    ) {
      result = board[0][i];
    }
  }
  if (
    board[0][0] !== 0 &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    result = board[0][0];
  }
  if (
    board[0][2] !== 0 &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    result = board[2][0];
  }
  if (result) {
    return result;
  }
  return finished ? 0 : -1;
}

// console.log(
//   isSolved([
//     [0, 0, 1],
//     [0, 1, 2],
//     [2, 1, 0],
//   ]) === -1
// );
// console.log(
//   isSolved([
//     [1, 2, 1],
//     [2, 1, 2],
//     [2, 1, 1],
//   ]) === 1
// );
// console.log(
//   isSolved([
//     [2, 2, 2],
//     [2, 1, 1],
//     [1, 2, 1],
//   ]) === 2
// );
// console.log(
//   isSolved([
//     [2, 1, 2],
//     [2, 1, 1],
//     [1, 2, 1],
//   ]) === 0
// );
// console.log(
//   isSolved([
//     [2, 1, 1],
//     [0, 1, 1],
//     [2, 2, 2],
//   ]) === 2
// );
console.log(
  isSolved([[1,1,1],[0,2,2],[0,0,0]]) === 1
);
