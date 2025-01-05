
// 선택 정렬은 작은 요소를 맨 민ㅌ에 깔아준다.
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i; // 변경의 대상이 되는 기준의 원소의 인덱스
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}

const randomArray = Array(10).fill(0).map(() => Math.floor(Math.random() * 100));
console.log("\n랜덤 숫자 배열", randomArray);
console.log("\n선택 정렬된 배열:", selectionSort(randomArray));

// O(n^2)