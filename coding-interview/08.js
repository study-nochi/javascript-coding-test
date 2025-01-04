function solution(s) {
  if (s[0] === ")") {
    return false
  }

  const arr = Array.from(s)

  const result = []
  let error = false

  arr.forEach((v, i) => {
    if(v === "(") {
      result.push(v)
    } else {
      if(result.length === 0) {
        error = true
        return;
      }
      result.pop()
    }
  })

  if(error) {
    return false
  }

  return result.length === 0
}


console.log(solution(")("))
console.log(solution("()("))
console.log(solution("()"))
console.log(solution("(())"))
console.log(solution("(()))"))