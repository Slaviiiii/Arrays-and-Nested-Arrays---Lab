function negativePositivepositions(arr) {
  let newArr = [];
  for (let element of arr) {
    if (element < 0) {
      newArr.unshift(element);
    } else if (element >= 0) {
      newArr.push(element)
    }
  }
  console.log(newArr.join('\n'));
}
negativePositivepositions([7, -2, 8, 9])