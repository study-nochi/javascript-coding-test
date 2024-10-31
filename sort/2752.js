let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let arr = input[0].map((text) => Number(text.trim()));

const set = new Set(arr);

let answer = '';
[...set].sort(a, b => a - b).forEach((num) => answer += num + '\n');

console.log(answer);