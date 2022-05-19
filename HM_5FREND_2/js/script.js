function equality(num_A) {
  return function (num_B) {
    return num_A * num_B;
  };
}
console.log(equality(2)(5));
