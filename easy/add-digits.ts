function addDigits(num: number) {
  let string = `${num}`;

  while (string.length > 1) {
    const toNum = string
      .split("")
      .map(Number)
      .reduce((a, c) => a + c);
    string = String(toNum);
  }
  return string;
}

console.log(addDigits(38));
