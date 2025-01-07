const dictionary = [{
  word: "a",
  mean: "라인 문의 첫번째 글자"
}]

const result = dictionary.find((item) => item.word === "a");

console.log(result);

// find 는 선형 탐색
// findIndex 는 선형 탐색
// findLast 는 뒤에서부터 탐색
// findLastIndex 는 뒤에서부터 탐색해서 인덱스 반환

// some 은 하나라도 만족하면 true 반환
// every 는 모두 만족해야 true 반환
// filter 는 조건에 맞는 것만 반환
// map 은 배열을 변형해서 반환
// reduce 는 누적해서 반환
// forEach 는 반복만 하고 반환은 없음
// includes 는 포함되어 있으면 true 반환
// indexOf 는 인덱스 반환
// lastIndexOf 는 뒤에서부터 인덱스 반환
// join 은 배열을 문자열로 반환
// slice 는 배열을 잘라서 반환