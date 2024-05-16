function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const maps: Record<string, number> = {};
  const stack: number[] = [];

  for (const num of nums2) {
    while (stack.length > 0 && num > stack.at(-1)!) {
      maps[stack.pop()!] = num;
    }
    stack.push(num);
  }
  return nums1.map((num) => maps[num] ?? -1);
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

// https://leetcode.com/problems/next-greater-element-i/
