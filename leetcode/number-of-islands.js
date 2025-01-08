
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length; // 행의 개수
  const cols = grid[0].length; // 열의 개수
  let islandCount = 0; // 섬의 개수

  console.log("Initial grid:", grid);

  const dfs = (x, y) => {
      // 좌표가 유효하지 않거나, 현재 위치가 물('0')이면 종료
      if (x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] === "0") return;

      console.log(`Visiting cell (${x}, ${y})`);
      grid[x][y] = "0"; // 방문 처리 (물로 변경)

      // 상하좌우 탐색
      dfs(x - 1, y); // 위
      dfs(x + 1, y); // 아래
      dfs(x, y - 1); // 왼쪽
      dfs(x, y + 1); // 오른쪽
  };

  // 모든 셀을 탐색
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          // 땅('1')을 발견하면 새로운 섬으로 간주
          if (grid[i][j] === "1") {
              console.log(`Found new island at (${i}, ${j})`);
              islandCount++; // 섬의 개수 증가
              dfs(i, j); // 현재 섬에 연결된 모든 땅 방문 처리
          }
      }
  }

  console.log("Final grid after processing:", grid);
  return islandCount; // 섬의 개수 반환
};

// Test cases
const grid1 = [
["1", "1", "1", "1", "0"],
["1", "1", "0", "1", "0"],
["1", "1", "0", "0", "0"],
["0", "0", "0", "0", "0"]
];
console.log("Number of islands:", numIslands(grid1)); // Output: 1

const grid2 = [
["1", "1", "0", "0", "0"],
["1", "1", "0", "0", "0"],
["0", "0", "1", "0", "0"],
["0", "0", "0", "1", "1"]
];
console.log("Number of islands:", numIslands(grid2)); // Output: 3

const grid3 = [
["1", "0", "0", "1", "0"],
["0", "0", "1", "1", "0"],
["1", "1", "0", "0", "0"],
["0", "0", "0", "0", "1"]
];
console.log("Number of islands:", numIslands(grid3)); // Output: 4
