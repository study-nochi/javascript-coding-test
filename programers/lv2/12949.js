function solution(arr1, arr2) {
  return arr1.map(row => {
    return arr2[0].map((x, y) =>
      row.reduce((sum, v, i) => sum + v * arr2[i][y], 0))
  })
}

