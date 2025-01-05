function insertSort(array) {
  for(let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while(j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = current;
  }

  return array;
}

const randomArray = Array(10).fill(0).map(() => Math.floor(Math.random() * 100));
console.log("\n랜덤 숫자 배열", randomArray);
console.log("\n삽입 정렬된 배열:", insertSort(randomArray));

// O(n^2)