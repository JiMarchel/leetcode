function findDisappearedNumbers(nums: number[]): number[] {
  const hashmap: Record<string, number> = {};
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = i + 1;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!hashmap[i]) output.push(i);
  }

  return output;
}

console.log(findDisappearedNumbers([1, 1]));

// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
