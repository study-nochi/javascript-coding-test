{
  console.log("Hello World!");
}

//* A+B
{
  // 1 2
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().split("\n");

  const line = input[0].split(" ");
  const a = parseInt(line[0]);
  const b = parseInt(line[1]);

  console.log(a + b);

}

//* A*B
{
  // 3 4
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().split("\n");

  const line = input[0].split(" ");
  const a = parseInt(line[0]);
  const b = parseInt(line[1]);

  console.log(a * b);
}

// 사칙연산
{
  // 7 3
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().split("\n");

  const line = input[0].split(" ");
  const a = parseInt(line[0]);
  const b = parseInt(line[1]);

  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(parseInt(a / b));
  console.log(a % b);
}
// 곱셈 
{
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().split("\n");

  const a = input[0];
  const b = input[1];

  x_1 = b[2];
  x_2 = b[1];
  x_3 = b[0];

  console.log(Number(a) * Number(x_1));
  console.log(Number(a) * Number(x_2));
  console.log(Number(a) * Number(x_3));
  console.log(Number(a) * Number(b));

}