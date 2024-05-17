function judgeCircle(moves: string): boolean {
  let horizontal = 0;
  let vertical = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "U":
        vertical++;
        break;
      case "D":
        vertical--;
        break;
      case "L":
        horizontal++;
        break;
      case "R":
        horizontal--;
        break;
    }
  }
  return horizontal === 0 && vertical === 0;
}

console.log(judgeCircle("UD"));

// https://leetcode.com/problems/robot-return-to-origin/
