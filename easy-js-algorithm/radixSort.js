function radixSort(arr) {
  const countingSort = (arr, exp) => {
    // 0 ~ 9까지의 숫자를 담을 배열
    const output = new Array(arr.length).fill(0);
    // 0 ~ 9까지의 숫자의 개수를 담을 배열
    const count = new Array(10).fill(0);

    // 0 ~ 9까지의 숫자의 개수를 센다.
    arr.forEach((num) => {
      const digit = Math.floor(num / exp) % 10;
      count[digit]++;
    });

    console.log("count:", count)

    // 0 ~ 9까지의 숫자의 개수를 누적합으로 바꾼다.
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }
    console.log("updated count:", count)
    // 누적합을 이용해서 정렬한다.
    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }
    console.log("finalized count:", count)

    // 정렬된 배열을 원래 배열에 복사한다.
    output.forEach((num, i) => {
      arr[i] = num;
    });
    console.log(`${exp}자리 수 연산: `, arr);
  }

  const max = Math.max(...arr);
  const maxDigit = Math.floor(Math.log10(max)) + 1; // 최대 자릿수
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }

  return arr;
}

const randomArray = Array(10).fill(0).map(() => Math.floor(Math.random() * 10000));
console.log("\n랜덤 숫자 배열", randomArray);
console.log("\n기수 정렬된 배열:", radixSort(randomArray));