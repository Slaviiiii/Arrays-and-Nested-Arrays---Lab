function pieceOfPie(arr, firstPie, lastPie) {
  let firstPieIndex = arr.indexOf(firstPie);
  let lastPieIndex = arr.indexOf(lastPie);
  let allPies = arr.slice(firstPieIndex, lastPieIndex + 1);
  return allPies;
}
console.log(pieceOfPie(['Pumpkin Pie',
  'Key Lime Pie',
  'Cherry Pie',
  'Lemon Meringue Pie',
  'Sugar Cream Pie'],
  'Key Lime Pie',
  'Lemon Meringue Pie')); 