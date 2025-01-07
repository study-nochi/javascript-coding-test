// 하나의 문제를 여러 개의 작은 문제로 나누어 해결
// 결과를 저장해서 더 큰 문제를 해결 
// 1. 피보나치 수열: 앞 수와 뒷 수를 더한 값이 현재 수가 되는 수열


function fibonacciRecursive(n) {
  console.log(`n: ${n}`);
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const n = 100;
// console.log(fibonacciRecursive(n));

function fibonacci(n) {
  const fibValues = [0, 1]; // 배열을 사용해 이미 계산한 값을 저장

  for (let i = 2; i <= n; i++) {
    fibValues[i] = fibValues[i - 1] + fibValues[i - 2];
  }

  return fibValues[n];
}

console.log(fibonacci(n));