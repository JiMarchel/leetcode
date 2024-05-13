// function missingNumber(nums: number[]) {
//   const sortNum = nums.sort((a, b) => a - b);
//   for (let i = 0; i < sortNum.length; i++) {
//     if (sortNum.indexOf(i) !== i) {
//       return i;
//     }
//   }
//   return sortNum.length;
// }

const missingNumber = (nums: number[]) =>
  nums.reduce((sum, acc, i) => (sum += i + 1 - acc), 0);

console.log(missingNumber([0, 1]));
