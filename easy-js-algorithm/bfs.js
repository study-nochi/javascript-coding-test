// 그래프를 표현한 인접 리스트

const graph = {
  상훈: ["철수", "영희"],
  철수: ["상훈", "영철"],
  영희: ["상훈", "희재", "민식"],
  영철: ["철수"],
  희재: ["영희", "수연"],
  민식: ["영희", "희재"],
  수연: ["희재", "지희"],
  지희: ["수연"]
}

function bfs(graph, startNode, targetNode) {
  const visited = {}; // 방문한 노드를 표시하기 위한 객체
  const queue = []; // 탐색할 정점을 저장할 큐
  const distances = {}; // 시작 정점으로부터 각 정점까지의 거리를 저장할 객체

  visited[startNode] = true; // 시작 정점을 방문 처리
  queue.push(startNode); // 시작 정점을 큐에 추가
  distances[startNode] = 0; // 시작 정점으로부터 시작 정점까지의 거리는 0

  while (queue.length !== 0) {
    const node = queue.shift(); // 큐에서 정점을 하나씩 추출.

    if(node === targetNode) {
      return distances[node]; // 목표 정점에 도달했을 때 거리를 리턴
    }
    
    console.log(node); // 정점을 출력 (또는 원하는 작업 수행)

    const adjacentNodes = graph[node]; // 인접 정점을 가져온다.

    for (let i = 0; i < adjacentNodes.length; i++) {
      const adjacentNode = adjacentNodes[i];
      if (!visited[adjacentNode]) { // 방문하지 않은 정점이라면
        visited[edge] = true; // 방문 처리를 한다.
        queue.push(adjacentNode); // 큐에 추가한다.
      }
    }
  }

  return -1; // 탐색에 실패했을 때 -1을 리턴
}

console.log(graph, "상훈", "지희");