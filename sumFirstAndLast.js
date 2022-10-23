function sumFirstAndLast(arr) {
  arr = arr.map(Number);
  let first = arr.shift();
  let last = arr.pop();
  console.log(first + last);
}
sumFirstAndLast([10, 50])