function addToArrayForm(num: number[], k: number): number[] {
  return String(BigInt(num.join("")) + BigInt(k))
    .split("")
    .map((s) => Number(s));
}

console.log(addToArrayForm([1, 2, 0, 0], 34));

// https://leetcode.com/problems/add-to-array-form-of-integer/
