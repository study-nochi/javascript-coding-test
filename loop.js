
//* 합
{
  // let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let input = ["10000"]

  let n = Number(input[0]);
  let summary = 0


  for (let i = 1; i <= n; i++) {
    summary += i;
  }
  console.log(summary);
}

//* 구구단
{
  // let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let input = ["9"];

  let n = Number(input[0]);
  let summary = 0;

  for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

//* 별 찍기
{
  // let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let input = ["9"];

  let n = Number(input[0]);
  let result = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result += "*";
    }
    result += "\n";
  }

  console.log(result);
}

//* 빠른 A+B
{
  let fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  // let input = ["9"];

  let testCase = Number(input[0]);
  let answer = "";

  for (let t = 1; t < testCase; t++) {
    let data = input[t].split(" ");
    let a = Number(data[0]);
    let b = Number(data[1]);
    answer += a + b + "\n";
  }

  console.log(answer);

}