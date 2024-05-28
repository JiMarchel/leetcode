function rotate(nums: number[], k: number): void {
  const n = [];
  for (let i = 0; i < k; i++) {
    let num = nums.pop()!;
    n.push(num);
  }
  nums.unshift(...n.reverse());
  console.log(nums);
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150
