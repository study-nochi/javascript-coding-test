function solveNQueen(n) {
  // n x n 체스판을 만들어서 퀸을 놓는 문제
  let board = Array(n).fill().map(() => Array(n).fill(false)); // 체스판
  let solutions = []; // 배치할 수 있는 해결책

  // 퀸을 놓을 수 있는지 확인
  function isValid(row, col) {
    // 세로열에 퀸이 있는지 확인
    for (let i = 0; i < row; i++) {
      if (board[i][col]) return false;
    }

    // 왼쪽 대각선에 퀸이 있는지 확인
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j]) return false;
    }

    // 오른쪽 대각선에 퀸이 있는지 확인
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j]) return false;
    }

    return true;
  }

  // 퀸을 배치
  function placeQueen(row) {
    // 결과인 solutions에 퀸을 배치한 경우를 저장
    if (row === n) {
      solutions.push(board.map(row => row.map(cell => cell ? "Q" : ".").join("")))
      return;
    }

    // 행마다 퀸을 놓을 수 있는지 확인
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = true; // 퀸을 하나 배치
        placeQueen(row + 1); // 그 다음 행에 대해서 검사
        board[row][col] = false; // 놓았던 퀸을 되돌리는 코드 백트래킹(초기화 발생)
      }
    }
  }

  placeQueen(0);
  return solutions;

}

console.log(solveNQueen(4))