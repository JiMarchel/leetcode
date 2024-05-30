function bitwiseComplement(n: number): number {
  let biner = n.toString(2);
  let rotate = "";
  for (let i = 0; i < biner.length; i++) {
    if (biner[i] === "1") {
      rotate += "0";
    } else {
      rotate += "1";
    }
  }

  return parseInt(rotate, 2);
}

console.log(bitwiseComplement(5));

// https://leetcode.com/problems/complement-of-base-10-integer/
