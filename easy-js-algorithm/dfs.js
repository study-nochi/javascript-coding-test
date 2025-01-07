// 깊이 우선 탐색

// 깊이 우선 탐색은 그래프의 깊은 부분을 우선적으로 탐색하는 알고리즘입니다.
// 깊이 우선 탐색은 스택 자료구조를 이용하여 구현할 수 있습니다.


let maze = [
  ["S", 0, 1, 0, 0,],
  [0, 0, 0, 0, 0,],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, "E"],
  [1, 1, 1, 0, 1]
];


function dfs(maze, position = [0, 0], path = []) {
  let [x, y] = position;
  if (maze[x][y] === "E") return [...path, position];

  let directions = [ // 상하좌우만 이동 가능
    [0, 1], // 하
    [0, -1], // 상 
    [1, 0], // 우
    [-1, 0] // 좌
  ];

  for (let [dx, dy] of directions) {
    let nx = x + dx;
    let ny = y + dy;

    if (nx >= 0 && nx < maze.length && ny >= 0 && ny < maze[0].length && (maze[nx][ny] === 0 || maze[nx][ny] === "E")) {
      maze[x][y] = 2;
      let found = dfs(maze, [nx, ny], [...path, position]);
      console.log("maze", maze);
      if (found) return found;
    }
  }

  console.log("failed", position);
  console.log("failed maze", maze);
  return null;
}


console.log(dfs(maze)); 