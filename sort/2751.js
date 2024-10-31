const file = `5
5
4
3
2
1`

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const index = input[0].split(" ").map(Number)[1];
let arr = input[1].split(" ").map(Number).sort((a, b) => a - b);
console.log(arr[index - 1]);

