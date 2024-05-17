function maximumProduct(nums: number[]): number {
  nums = nums.sort((a, b) => b - a);
  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[0],
  );
}

console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));