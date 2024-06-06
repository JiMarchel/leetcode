function maximumCount(nums: number[]): number {
  let negative = 0;
  let positive = 0;

  for (const num of nums) {
    if (num === 0) continue;
    num < 0 ? (negative += 1) : (positive += 1);
  }

  return Math.max(negative, positive);
}

console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));

// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
