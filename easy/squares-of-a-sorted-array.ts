function sortedSquares(nums: number[]): number[] {
  return nums.map((e) => e * e).sort((a, b) => a - b);
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));

// https://leetcode.com/problems/squares-of-a-sorted-array/
