function singleNumber(nums: number[]): number {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      seen.delete(num);
    } else {
      seen.add(num);
    }
  }

  return seen.values().next().value;
}

console.log(singleNumber([2, 2, 1, 3, 3, 3, 3, 3]));

// https://leetcode.com/problems/single-number/
