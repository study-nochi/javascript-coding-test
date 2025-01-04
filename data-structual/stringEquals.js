
/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 * @returns 
 */

function StringEqual(str1, str2) {
	if (str1.length !== str2.length) {
		return false
	}

	const N = str1.length
	let i = 0
	while (i < N && str1[i] === str2[i]) {
		i = i + 1
	}

	return i === N
}

console.log(StringEqual("hello", "hello")) // true
console.log(StringEqual("hello", "world")) // false
console.log(StringEqual("hello", "hell")) // false
console.log(StringEqual("hello", "hellp")) // false