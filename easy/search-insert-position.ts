function searchInsert(nums: number[], target: number) {
  const isTargetInNums = nums.indexOf(target);
  if (isTargetInNums !== -1) return isTargetInNums;

  const insert = [...nums, target].sort((a, b) => a - b).indexOf(target);
  return insert;
}

console.log(searchInsert([3, 5, 7, 9, 10], 8));
