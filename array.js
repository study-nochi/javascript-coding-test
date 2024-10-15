//* 최소, 최대 
{
  // let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let input = ["9 1 3"];

  let arr = input[0].split(" ").map(Number);
  let max = -1000001;
  let min = 1000000;

  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (min > v) min = v;
    if (max < v) max = v;
  }

  let minValue = arr.reduce((a, b) => Math.min(a, b));
  let maxValue = arr.reduce((a, b) => Math.max(a, b));

  console.log(min, max);
  console.log(minValue, maxValue);

}

//* 최댓값 
{
  // let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let input = ["9 1 3"];

  let arr = input[0].split(" ").map(Number);
  let max = Math.max(...arr)

  console.log(max)
}

//* 나머지
{
  // let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let input = ["1 2 3 4 5 6 7 8 9 10"];

  let data = input[0].split(" ").map(Number);
  let set = new Set();

  for (let i = 0; i < data.length; i++) {
    set.add(data[i] % 3);
  }

  console.log(set.size, Array.from(set))

}

//* 학생 평균 구하기
{
  let fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  // let input = ["1 2 3 4 5 6 7 8 9 10"];

  let testCases = Number(input[0]);
  for (let t = 1; t <= testCases; t++) {
    let data = input[t].split(" ").map(Number);
    let n = data[0]; // 첫 번째 수는 데이터의 개수
    let summary = 0; // n개의 점수에 대하여 평균 계산

    for (let i = 1; i <= n; i++) {
      summary += data[i];
    }

    let average = summary / n;
    let cnt = 0; // 점수가 평균을 넘는 학생 수 계산

    for (let i = 1; i <= n; i++) {
      if (data[i] > average) cnt += 1;
    }

    console.log(`${(cnt / n * 100).toFixed(3)}%`)
  }
}

//* 평균
{
  let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let input = ["3", "40 80 60"]

  let n = Number(input[0]);
  let scores = input[1].split(" ").map(Number);

  let maxValue = scores.reduce((a, b) => Math.max(a, b));
  let updated = [];
  for (let i = 0; i < n; i++) {
    updated.push(scores[i] / maxValue * 100);
  }

  console.log(updated.reduce((a, b) => a + b) / n);
}