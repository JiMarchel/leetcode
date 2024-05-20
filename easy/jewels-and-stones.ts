// function numJewelsInStones(jewels: string, stones: string): number {
//   const arr = [];
//   for (let i = 0; i < stones.length; i++) {
//     if (jewels.includes(stones[i])) arr.push(stones[i]);
//   }
//   return arr.length;
// }
function numJewelsInStones(jewels: string, stones: string): number {
  let jewelsCounter = 0;

  for (let i = 0; i < stones.length; i++) {
    console.log(jewels.indexOf(stones[i]));

    if (jewels.indexOf(stones[i]) >= 0) {
      jewelsCounter++;
    }
  }

  return jewelsCounter;
}

console.log(numJewelsInStones("aA", "aAAbKSKskld"));

// https://leetcode.com/problems/jewels-and-stones/
