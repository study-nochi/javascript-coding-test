function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach(word => {
    if (regex.test(word)) answer++;  
  })

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]))
console.log(solution(	["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]))