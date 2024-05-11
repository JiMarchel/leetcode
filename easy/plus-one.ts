function plusOne(digits: number[]): number[] {
  const bigInt = BigInt(digits.join("")) + BigInt(1);
  return Array.from(String(bigInt), Number);
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// https://leetcode.com/problems/plus-one/submissions/
