
/**
 * 
 * @param {Array} A 
 */
function InsertionSort(A) {
  const N = A.length
  let i = 1

  while (i < N) {
    let current = A[i]
    let j = i - 1
    while (j >= 0 && A[j] > current) {
      A[j + 1] = A[j]
      j = j - 1
    }
    A[j + 1] = current
    i = i + 1
  }

  return A
}

const randomArray = Array(10).fill(0).map(() => Math.floor(Math.random() * 100))

console.log("\n랜덤 숫자 배열", randomArray)
console.log("\n삽입 정렬된 배열:", InsertionSort(randomArray))

/**

랜덤 숫자 배열 [
  71, 95, 46,  0, 81,
  11, 94, 34, 56, 96
]
삽입 정렬된 배열: [
   0, 11, 34, 46, 56,
  71, 81, 94, 95, 96
]
 */