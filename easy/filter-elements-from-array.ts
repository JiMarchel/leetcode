// https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  const filteredArr: number[] = []
  for (let i = 0; i < arr.length; i++){
   const isTruthy: number = fn(arr[i], i);
   if (isTruthy) {
    filteredArr.push(arr[i]);
   }
  }
 
  return filteredArr;
};

function plusOne(n: number) { return n + 1 }

console.log(filter([-2,-1,0,1,2], plusOne))
