function rotateString(s: string, goal: string): boolean {
  const arr = s + s;
  if (s.length !== goal.length) return false;

  return arr.includes(goal);
}

console.log(rotateString("abcde", "cdeab"));

// https://leetcode.com/problems/rotate-string/
