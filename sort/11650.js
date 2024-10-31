let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = `5
3 4
1 1
1 -1
2 2
3 3`.toString().split('\n');


let count = Number(input[0]);
let arr = input.slice(1, count + 1).map(text => text.split(' ').map(Number));

const sorted = arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
})

console.log(sorted.map(row => row.join(" ")).join("\n"))