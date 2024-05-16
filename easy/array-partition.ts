// function arrayPairSum(nums: number[]): number {
//   const numsSort = nums.sort((a, b) => a - b);
//   const minNums = [];
//
//   for (let i = 0; i < numsSort.length; i++) {
//     if (i % 2 === 0) {
//       minNums.push(Math.min(numsSort[i], numsSort[i + 1]));
//     }
//   }
//   return minNums.reduce((acc, curr) => acc + curr);
// }

function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i = i + 2) {
    sum += nums[i];
  }
  return sum;
}

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));

// https://leetcode.com/problems/array-partition/
