function repeatedNTimes(nums: number[]): number {
  const numsMap = new Map();

  for (const n of nums) {
    if (numsMap.has(n)) {
      numsMap.set(n, numsMap.get(n) + 1);
    } else {
      numsMap.set(n, 1);
    }
  }

  const len = nums.length / 2;
  for (const [key, value] of numsMap.entries()) {
    if (value === len) {
      return key;
    }
  }
}

console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));

// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
