function primMST(graph) {
  const parent = []; // 각 노드의 부모노드를 찾아서 저장
  const key = []; // 각 노드의 key값을 저장
  const visited = []; // 방문한 노드를 저장
  const { length } = graph;

  for (let i = 0; i < length; i++) {
    key[i] = Infinity; // 최소 간선 가중치를 저장해두는 배열
    visited[i] = false; // 방문한 노드를 저장해두는 배열
  }
  key[0] = 0;
  parent[0] = -1;

  for (let count = 0; count < length - 1; count++) {
    const u = minKey(key, visited); // u: 노드 x에 대한 기준을 말함
    visited[u] = true;

    for (let v = 0; v < length; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v]; // 최소 간선 가중치 업데이트
      }
    }
  }

  return parent;
}

function minKey(key, visited) {
  let min = Infinity;
  let minIndex;
  for (let v = 0; v < key.length; v++) {
    if (!visited[v] && key[v] < min) {
      min = key[v];
      minIndex = v;
    }
  }
  return minIndex;
}

// 간선 가중치를 최소화 하는 형태로 트리구조를 만드는 방법 
// graph[3][3] === 0, 노드 0과 노드 0의 간선 가중치가 0이라는 뜻 

const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0],
]

// -1: 시작 노드
console.log(primMST(graph)); // [ -1, 0, 1, 0, 1]
