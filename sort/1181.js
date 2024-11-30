let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`.toString().split('\n');


const set = new Set(input.slice(1));
const text = Array.from(set).sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length
  }
  return a.localeCompare(b)
}).join('\n')

console.log(text.trim())



// const sorted = arr.sort((a, b) => {
//   if (a[1] === b[1]) {
//     return a[0] - b[0];
//   }
//   return a[1] - b[1];
// })

// console.log(sorted.map(row => row.join(" ")).join("\n"))