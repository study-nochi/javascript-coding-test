// 공원을 나타내는 문자열 배열 park 

function solution(park, routes) {
  const rowLength = park.length;
  const colLength = park[0].split("");

  const graph = new Map()
  let location = { x: 0, y: 0 }


  park.forEach((row, x) => {
    row.split("").forEach((cell, y) => {
      if (cell === "S") location = { x, y }
      graph.set([x, y], cell)
    });
  })

  routes.forEach((route) => {
    const [d, n] = route

    switch (d) {
      case "N":
        location.y += n
        break;
      case "S":
        location.y -= n
        break;
      case "W":
        break;
      case "E":
        break;

    }
  })


  return cols;
}


// 지나다니는 길을 'O', 장애물을 'X'로 나타낸 직사각형 격자 모양의 공원
// 