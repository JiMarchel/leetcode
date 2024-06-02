function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const order: Record<number, number> = {};

  for (const num of arr2) {
    order[num] = num;
  }

  arr1.sort((a, b) => {
    a = a in order ? order[a] : a + 1001;
    b = b in order ? order[b] : b + 1001;
    console.log({ a, b });

    return a - b;
  });

  return arr1;
}

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]),
);

// https://leetcode.com/problems/relative-sort-array/
