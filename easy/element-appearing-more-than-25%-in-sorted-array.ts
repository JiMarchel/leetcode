function findSpecialInteger(arr: number[]): number {
  const obj: Record<number, number> = {};
  let key = "";
  let value = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in obj)) {
      obj[arr[i]] = 1;
    } else if (arr[i] in obj) {
      obj[arr[i]]++;
    }
  }

  for (const [objKey, objValue] of Object.entries(obj)) {
    if (objValue > value) {
      value = objValue;
      key = objKey;
    }
  }

  return parseInt(key);
}

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));

// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
