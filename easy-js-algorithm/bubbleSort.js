function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
}

const randomArray = Array(10).fill(0).map(() => Math.floor(Math.random() * 100))
console.log("\n랜덤 숫자 배열", randomArray)
bubbleSort(randomArray)
console.log("\n버블 정렬된 배열:", randomArray)