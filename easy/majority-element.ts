function majorityElement(nums: number[]) {
  let count = 0;
  let element = 0;

  for (const num of nums) {
    if (count === 0) {
      element = num;
      count = 1;
    } else if (element === num) {
      count++;
    } else {
      count--;
    }
  }

  return element;
}

console.log(majorityElement([2, 1, 2, 1, 1, 1, 2, 2]));
