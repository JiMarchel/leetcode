function subtractProductAndSum(n: number): number {
  const arr = String(n).split("").map(Number);
  const multi = arr.reduce((acc, curr) => acc * curr, 1);
  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  return multi - sum;
}

console.log(subtractProductAndSum(234));

// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
