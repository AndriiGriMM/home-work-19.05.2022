function equality(text, arr) {
  for (let i of arr) {
    text = text.replaceAll(i, "");
  }
  return text;
}
console.log(equality("hello world", ["l", "d"]));
