function findDifference(nums1: number[], nums2: number[]): number[][] {
  const [ansSet1, ansSet2] = [new Set(nums1), new Set(nums2)];

  return [[...ansSet1].filter((e) => !ansSet2.delete(e)), [...ansSet2]];
}

console.log(findDifference([1, 2, 3], [2, 4, 6]));

// https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75
