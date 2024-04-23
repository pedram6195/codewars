function orderWeight(str) {
  return str
    .split(' ')
    .sort((a, b) => {
      let sumA = a.split('').reduce((acc, num) => +acc + +num, 0)
      let sumB = b.split('').reduce((acc, num) => +acc + +num, 0)
      if (sumA === sumB) return a.localeCompare(b)
      return sumA - sumB
    })
    .join(' ')
}
