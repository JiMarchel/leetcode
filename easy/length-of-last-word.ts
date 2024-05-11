const lengthOfLastWord = (s: string) =>
  s
    .split(" ")
    .filter((v) => v.trim())
    .slice(-1)
    .toString().length;

console.log(lengthOfLastWord("   fly me   to   the moon  "));

// https://leetcode.com/problems/length-of-last-word/submissions/
