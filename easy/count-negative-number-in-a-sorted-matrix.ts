function countNegatives(grid: number[][]): number {
  let negative = 0;

  for (const nums of grid) {
    for (const num of nums) {
      if (num < 0) negative += 1;
    }
  }
  return negative;
}

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ]),
);

// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
