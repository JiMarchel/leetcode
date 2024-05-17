// function findErrorNums(nums: number[]): number[] {
//   let dup = -1,
//     missing = -1;
//
//   for (let i = 1; i <= nums.length; i++) {
//     let count = nums.filter((num) => num === i).length;
//     if (count === 2) {
//       dup = i;
//     } else if (count === 0) {
//       missing = i;
//     }
//   }
//   return [dup, missing];
// }

function findErrorNums(nums: number[]): number[] {
  let dup = 0,
    missing = 0;
  const set = new Set();

  for (const num of nums) {
    if (!set.has(num)) set.add(num);
    else dup = num;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }

  return [dup, missing];
}

console.log(findErrorNums([1, 2, 2, 4]));

// https://leetcode.com/problems/set-mismatch/
