const addStrings = (num1: string, num2: string) =>
  [num1, num2]
    .map(BigInt)
    .reduce((acc, curr) => acc + curr)
    .toString();

console.log(addStrings("11", "123"));

// https://leetcode.com/problems/add-strings/
