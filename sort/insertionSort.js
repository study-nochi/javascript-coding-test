/**
 * 
 * @param {any[]} arr 
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; i--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp
      } else {
        break
      }
    }
  }
}

let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

console.time('selectionSort');
insertionSort(arr);
console.timeEnd('selectionSort');

arr = Array.from({ length: 30000 }, () => 7);

console.time('selectionSort');
insertionSort(arr);
console.timeEnd('selectionSort');