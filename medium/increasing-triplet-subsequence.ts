function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;

  for (let num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }

  return false;
}
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));

// https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75
