
//* 성적 구하기
{
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().split("\n");

  data = Number(input[0]);

  function check(a) {
    if (90 <= a && a <= 100) {
      console.log("A");
    } else if (80 <= a && a <= 89) {
      console.log("B");
    } else if (70 <= a && a <= 79) {
      console.log("C");
    } else if (60 <= a && a <= 69) {
      console.log("D");
    } else {
      console.log("F");
    }
  }

  check(data);
}

//* 알림시계
{
  let fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  const [h, m] = input[0].split(" ").map(Number);

  if (m < 45) {
    h -= 1;
    m += 15;
    if (h < 0) h = 23;
  } else {
    m -= 45;
  }

  console.log(h + " " + m);
}

//* 오븐 시계
{
  let fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  const [a, b] = input[0].split(" ").map(Number);
  const c = Number(input[1]);
  const totalMinute = a * 60 + b + c;

  totalMinute %= 1440;

  let h = parseInt(totalMinute / 60);
  let m = totalMinute % 60;

  console.log(h + " " + m);

}

//* 주사위 세 개
{
  // let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let input = ["6 6 6"]

let [a, b, c] = input[0].split(" ").map(Number);

// 세 개의 수가 모두 같은 경우
if (a === b && b === c) console.log(10000 + a * 1000);
// 세 개의 수가 전부 같지 않지만, 두 개의 수가 같은 경우
else if (a === b) console.log(1000 + a * 100);
else if (a === c) console.log(1000 + a * 100);
else if (b === c) console.log(1000 + b * 100);
// 세 개의 수가 전부 다른 경우
else console.log(Math.max(a, b, c) * 100);

}