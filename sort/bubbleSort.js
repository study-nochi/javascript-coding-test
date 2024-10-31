/**
 * 
 * @param {any[]} arr 
 */

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

console.time('selectionSort');
bubbleSort(arr);
console.timeEnd('selectionSort');

arr = Array.from({ length: 30000 }, () => 7);

console.time('selectionSort');
bubbleSort(arr);
console.timeEnd('selectionSort');