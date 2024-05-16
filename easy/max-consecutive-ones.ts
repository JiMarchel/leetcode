function findMaxConsecutiveOnes(nums: number[]): number {
  let count = 0;
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      arr.push(count);
      count = 0;
    }
  }
  arr.push(count);
  return Math.max(...arr);
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1]));

// https://leetcode.com/problems/max-consecutive-ones/
