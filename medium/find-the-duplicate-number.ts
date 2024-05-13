// function findDuplicate(nums: number[]): number {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       return nums[i];
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   return 0;
// }

function findDuplicate(nums: number[]) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    } else {
      set.add(nums[i]);
    }
  }
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
