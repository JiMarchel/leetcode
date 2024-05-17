// function canPlaceFlowers(flowerbed: number[], n: number): boolean {
//   flowerbed = [0, ...flowerbed, 0];
//   for (let i = 1; i < flowerbed.length - 1; i++) {
//     if (
//       flowerbed[i - 1] === 0 &&
//       flowerbed[i] === 0 &&
//       flowerbed[i + 1] === 0
//     ) {
//       flowerbed[i] = 1;
//       --n;
//     }
//     if (n === 0) {
//       return true;
//     }
//   }
//   return n <= 0;
// }

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i: number = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));

// https://leetcode.com/problems/can-place-flowers/
