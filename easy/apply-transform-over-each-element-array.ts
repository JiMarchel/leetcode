function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let ans: number[] = [];
  arr.forEach((x, i) => {
    ans.push(fn(x, i));
  });
  return ans;
}
