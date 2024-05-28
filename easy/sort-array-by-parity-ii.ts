function sortArrayByParityII(nums: number[]): number[] {
  const res = Array(nums.length);
  let even = 0;
  let odd = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      res[even] = nums[i];
      even += 2;
    } else {
      res[odd] = nums[i];
      odd -= 2;
    }
  }
  return res;
}

console.log(sortArrayByParityII([4, 2, 5, 7]));

// https://leetcode.com/problems/sort-array-by-parity-ii/
