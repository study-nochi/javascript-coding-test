function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0]; // 피벗으로 첫 번째 원소 선택
  const left = []; // 기준점보다 작은 값이 모인 배열
  const right = []; // 기준점보다 큰 값이 모인 배열

  // 피벗을 기준으로 작은 값은 left, 큰 값은 right에 넣어준다.
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // 재귀적으로 연산이 끝날 때까지 반복
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const randomArray = Array(10).fill(0).map(() => Math.floor(Math.random() * 100));
console.log("\n랜덤 숫자 배열", randomArray);
console.log("\n퀵 정렬된 배열:", quickSort(randomArray));