
/**
 * 
 * @param {any[]} arr 은 1차원 배열이다. 
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if ([arr[minIndex] > arr[j]]) {
        minIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

console.time('selectionSort');
selectionSort(arr);
console.timeEnd('selectionSort');

arr = Array.from({ length: 30000 }, () => 7);

console.time('selectionSort');
selectionSort(arr);
console.timeEnd('selectionSort');