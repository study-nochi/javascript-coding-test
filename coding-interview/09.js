// 10 진수를 2진수로 변환
function solution(n) {
  const result = [];
  while (n > 0) {
    result.unshift(n % 2);
    n = parseInt(n / 2);
  }
  return result.join("");
}

console.log(solution(11)); // 1011
console.log(solution(16)); // 10000
console.log(solution(32)); // 100000