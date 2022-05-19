const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15];
function equality(arrayNum) {
  const total = arrayNum.reduce(function (item, value) {
    return item + value;
  }, 0);
  return total / arrayNum.length;
}
