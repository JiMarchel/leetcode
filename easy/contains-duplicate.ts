//function containsDuplicate(nums: number[]): boolean {
//const arr: number[] = [];
//for (let i = 0; i < nums.length; i++) {
//if (arr.includes(nums[i])) {
//return true;
//}
//arr.push(nums[i]);
//}

//return false;
//}

function containsDuplicate(nums: number[]): boolean {
  let obj: Record<string, string> = {};
  for (let i = 0; i < nums.length; i++) {
    //Check if nums already in obj
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = "haha";
    } else {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate([2, 3, 1, 2]));
//https://leetcode.com/problems/contains-duplicate/submissions/
