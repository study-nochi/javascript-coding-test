function heapSort(arr) {

  // 힙을 구성하는 함수
  function buildHeap(arr) {
    const len = arr.length;
    // 배열의 중간부터 시작해서 루트 노드까지 heapify를 수행
    for (let i = Math.floor(len / 2); i >= 0; i--) {
      heapify(arr, len, i);
    }
  }

  // 힙을 유지하도록 하는 함수
  function heapify(arr, len, idx) {
    let largest = idx;
    const left = 2 * idx + 1; // 왼쪽 자식 노드
    const right = 2 * idx + 2; // 오른쪽 자식 노드

    // 왼쪽 자식 노드가 루트 노드보다 크다면
    if (left < len && arr[left] > arr[largest]) {
      largest = left;
    }

    // 오른쪽 자식 노드가 루트 노드보다 크다면
    if (right < len && arr[right] > arr[largest]) {
      largest = right;
    }

    // 루트 노드가 자식 노드보다 작다면
    if (largest !== idx) {
      [arr[idx], arr[largest]] = [arr[largest], arr[idx]];
      heapify(arr, len, largest);
    }

    return arr;
  }

  // 정렬을 수행하는 함수
  function sort(arr) {
    const len = arr.length;
    buildHeap(arr); // 힙을 구성
    // 힙 정렬을 수행
    for (let i = len - 1; i >= 0; i--) {
      // 루트 노드와 마지막 노드를 교체
      [arr[0], arr[i]] = [arr[i], arr[0]];
      // 마지막 노드를 제외하고 힙을 다시 구성
      heapify(arr, i, 0);
      console.log(`heapify(${i}):`, arr);
    }

    return arr;
  }

  return sort(arr);

}

const randomArray = Array(10).fill(0).map(() => Math.floor(Math.random() * 100));
console.log("\n랜덤 숫자 배열", randomArray);
console.log("\n힙 정렬된 배열:", heapSort(randomArray)); 