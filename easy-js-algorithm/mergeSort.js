// O(n log n)
// 공간 복잡도가 상대적으로 높다.
function mergeSort(arr) {

  // 배열의 길이가 1이하면 그대로 반환
  if (arr.length <= 1) { // 나누지 않는 단계
    return arr;
  }

  const mid = Math.floor(arr.length / 2); // 중간 인덱스 찾기
  const left = arr.slice(0, mid); // 중간 원소보다 작은 값이 모인 배열
  const right = arr.slice(mid); // 중간 원소보다 큰 값이 모인 배열

  console.log("left", left)
  console.log("right", right)
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let merged = []; // 정렬된 배열을 담을 공간
  let leftIndex = 0; // 왼쪽 배열의 인덱스
  let rightIndex = 0; // 오른쪽 배열의 인덱스
  console.log("left", left)
  console.log("right", right)

  // 왼쪽 배열과 오른쪽 배열을 비교하면서 작은 값을 merged 배열에 넣어준다.
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      // 왼쪽 배열의 값이 더 작으면 왼쪽 배열의 값을 merged 배열에 넣어주고 왼쪽 배열의 인덱스를 증가시킨다.
      merged.push(left[leftIndex]);
      console.log("1 merged", merged)
      leftIndex++;
    } else {
      // 오른쪽 배열의 값이 더 작으면 오른쪽 배열의 값을 merged 배열에 넣어주고 오른쪽 배열의 인덱스를 증가시킨다.
      merged.push(right[rightIndex]);
      console.log("2 merged", merged)
      rightIndex++;
    }
  }

  // 왼쪽 배열이 남아있을 경우
  while (leftIndex < left.length) {
    // 왼쪽 배열의 값을 merged 배열에 넣어주고 왼쪽 배열의 인덱스를 증가시킨다.
    merged.push(left[leftIndex]);
    console.log("3 merged", merged)
    leftIndex++;
  }

  // 오른쪽 배열이 남아있을 경우
  while (rightIndex < right.length) {
    // 오른쪽 배열의 값을 merged 배열에 넣어주고 오른쪽 배열의 인덱스를 증가시킨다.
    merged.push(right[rightIndex]);
    console.log("4 merged", merged)
    rightIndex++;
  }

  return merged;
}

const randomArray = Array(10).fill(0).map(() => Math.floor(Math.random() * 100));
console.log("\n랜덤 숫자 배열", randomArray);
console.log("\n병합 정렬된 배열:", mergeSort(randomArray));