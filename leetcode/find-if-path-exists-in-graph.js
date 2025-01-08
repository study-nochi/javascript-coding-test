/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  console.log("Start Function");
  console.log("Input:", { n, edges, source, destination });

  if (source === destination) {
    console.log("Source is the same as destination. Returning true.");
    return true;
  }

  // Build the graph
  const graph = new Map();
  for (let [u, v] of edges) {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  console.log("Graph built:", graph);

  // BFS
  const queue = [source];
  const visited = new Set([source]);

  console.log("Initial queue:", queue);
  console.log("Initial visited set:", visited);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log("Dequeued node:", node);

    if (node === destination) {
      console.log("Destination found. Returning true.");
      return true;
    }

    for (let neighbor of (graph.get(node) || [])) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        console.log("Visited neighbor:", neighbor);
        console.log("Updated queue:", queue);
      }
    }
  }

  console.log("No path found. Returning false.");
  return false;
};

// Test data
const n = 10;
const edges = [
    [0, 1], [0, 2], [1, 3], [3, 4], [4, 5],
    [5, 6], [6, 7], [7, 8], [8, 9], [1, 6],
    [2, 7], [3, 8], [4, 9]
];
const source = 0;
const destination = 9;

console.log("Result:", validPath(n, edges, source, destination));
