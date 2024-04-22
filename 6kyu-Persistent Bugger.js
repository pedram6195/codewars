function persistence(num) {
  let count = 0
  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((acc, digit) => {
        return acc * +digit
      }, 1)
    count++
  }
  return count
}
