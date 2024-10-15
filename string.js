// 숫자의 합
{
  let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let input = ["5", "54321"];

  let n = Number(input[0]);
  let string = input[1];

  let answer = 0;

  for (let x of string) {
    answer += Number(x);
  }

  console.log(answer)
}

//* 문자열 반복
{
  let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let input = ["2", "3 ABC", "5 /HTP"];

  let testCase = Number(input[0])

  for (let i = 1; i <= testCase; i++) {
    let [r, s] = input[i].split(" ");
    let result = "";

    for (let j = 0; j < s.length; j++) {
      result += s[j].repeat(r);
    }
    console.log(result);
  }
}

//* 상수
{
  let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let input = ["734 893"];

  let [a, b] = input[0].split(" ").map(String);

  let newA = Number(a.split("").reverse().join(""));
  let newB = Number(b.split("").reverse().join(""));

  console.log(Math.max(newA, newB));

}

//* 그룹 단어 체커
{
  let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let input = ["3", "happy", "new", "year"];

  function check(data) {
    let setData = new Set(data[0]);
    for (let i = 0; i < data.length; i++) {
      if (data[i] != data[i + 1]) {
        if (setData.has(data[i + 1])) {
          return false;
        } else {
          setData.add(data[i + 1]);
        }
      }
    }
    return true;
  }

  let n = Number(input[0]);
  let summary = 0;

  for (let i = 1; i <= n; i++) {
    let data = input[i];
    if (check(data)) summary += 1;
  }

  console.log(summary);

}

//* 단어의 개수
{
  let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let input = ["The Curious Case of Benjamin Button"];

  let data = input[0].trim().split(" ");

  if (data == "") {
    console.log("0");
  } else {
    console.log(data.length);
  }

}