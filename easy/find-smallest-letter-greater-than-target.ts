function nextGreatestLetter(letters: string[], target: string): string {
  const set = new Set(letters);
  for (const l of set) {
    if (l > target) return l;
  }
  return letters[0];
}

console.log(nextGreatestLetter(["c", "f", "j"], "a"));

// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
