// function sortArrayByParity(nums: number[]): number[] {
//   const even = nums.filter((v) => v % 2 === 0);
//   const odd = nums.filter((v) => v % 2 !== 0);
//
//   return even.concat(odd);
// }

function sortArrayByParity(nums: number[]) {
  let right = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      console.log([nums[i], nums[right]]);

      [nums[i], nums[right]] = [nums[right], nums[i]];
      right++;
    }
  }

  return nums;
}

console.log(sortArrayByParity([3, 1, 2, 4]));

// https://leetcode.com/problems/sort-array-by-parity/
