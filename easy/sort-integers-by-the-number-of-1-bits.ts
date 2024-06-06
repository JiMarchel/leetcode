function sortByBits(arr: number[]): number[] {
  return arr.sort((a, b) => {
    const countA = a.toString(2).replace(/0/g, "").length;
    const countB = b.toString(2).replace(/0/g, "").length;

    if (countA === countB) {
      return a - b;
    } else {
      return countA - countB;
    }
  });
}

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));

// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
