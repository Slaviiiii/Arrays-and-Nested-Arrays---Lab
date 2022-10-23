function biggestNumber(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].sort((a, b) => {
      return b - a;
    });
    newArr.push(sorted[0]);
  }
  let newSortedArr = newArr.sort((a, b) => {
    return b - a;
  });
  return newSortedArr[0];
}
console.log(biggestNumber([[20, 50, 10],
[8, 33, 145]])); 