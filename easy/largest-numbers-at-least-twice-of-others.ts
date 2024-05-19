function dominantIndex(nums: number[]): number {
  const max = Math.max(...nums);
  for (const num of nums) {
    if (num === max) {
      continue;
    } else if (num * 2 > max) {
      return -1;
    }
  }
  return nums.indexOf(max);
}

console.log(dominantIndex([3, 6, 1, 0]));

// https://leetcode.com/problems/largest-number-at-least-twice-of-others/
