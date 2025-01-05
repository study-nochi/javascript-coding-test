// 월간 코드 챌린지 시즌2
// 괄호 회전하기
// url: https://school.programmers.co.kr/learn/courses/30/lessons/76502

/**
 문제 설명
다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

(), [], {} 는 모두 올바른 괄호 문자열입니다.
만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(s) {
  const length = s.length;
  let answer = 0;
  
  for(let i = 0; i < s.length; i++) {
      const stack = [];
      let isCorrect = true;
      
      for (let j = 0; j < length; j++) {
          // 괄호 문자열을 회전시키면서 참조
          const char = s[(i + j) % length];
          
          if (["[", "(", "{"].includes(char)) {
              // 열린 괄호는 push
              stack.push(char);
              continue;
          } 
          
          if(stack.length === 0) {
              // 여는 괄호가 없는 경우
              isCorrect = false;
              break;
          }
              
          // 닫힌 괄호는 스택의 top과 짝이 맞는지 비교
          const top = stack[stack.length - 1];
          if((char === "]" && top === "[")
              || (char === ")" && top === "(")
              || (char === "}" && top === "{")
          ) {
              stack.pop()    
          } else {
              isCorrect = false;
              break;
          }
      }
      
      // 모든 괄호의 짝이 맞는 경우
      if(isCorrect && stack.length === 0) {
          answer += 1
      }
  }
  return answer
}



