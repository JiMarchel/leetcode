function largeGroupPositions(s: string): number[][] {
  const arr = [];
  let lastIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      continue;
    } else if (s[i] !== s[i + 1]) {
      arr.push([lastIndex, i]);
      lastIndex = i + 1;
    }
  }
  return arr.filter((s) => s[1] - s[0] >= 2);
}

console.log(largeGroupPositions("abcdddeeeeaabbbcd"));

// https://leetcode.com/problems/positions-of-large-groups/
