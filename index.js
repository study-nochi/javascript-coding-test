//* 파일을 읽는 문제 
{
  let fs = require('fs');
  let input = fs.readFileSync('input.txt').toString().split('\n');
}

console.log(input)

//* 입력을 받는 문제
{
  const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  rl.on("line", function (line) {
    input.push(line);
  }).on("close", function () {
    console.log(input);
    process.exit();
  });
}

//* 반복문 for
{
  let summary = 0;

  for (let i = 0; i <= 100; i++) {
    summary += i;
  }

  console.log(summary);
}

//* 원소의 합계 구하기 
{
  const data = [1, 2, 3, 4, 5];
  let summary = data.reduce((a, b) => a + b, 0);
  console.log(summary);
}

//* 배열 초기화 방법 - 직접 값을 설정
{
  let arr = [8, 4, 2, 5, 1, 3, 7, 6];
}

//* 배열 초기화 방법 - fill() 함수
{
  let arr = new Array(100).fill(0);
}

//* 집합 자료형 : 원소의 등장 여부 파악
{
  let set = new Set();
  set.add(3);
  set.add(5);
  set.add(7);
  set.add(4);
  set.add(3);
  
  console.log(set.size);
  console.log(set.has(3));
  console.log(set.has(1));
  console.log(set.has(6));

  set.delete(3);

  for (let item of set) {
    console.log(item);
  }
}

//* 실수 출력 시, 소수점 자리수 지정
{
  let a = 1.234567;
  console.log(a.toFixed(2));
}

//* Escape Sequence
{
  console.log("Hello\nWorld");
  console.log("Hello\tWorld");
  console.log("Hello\"World\"");
}

