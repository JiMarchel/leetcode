function reverseWords(s: string): string {
  return s
    .split(" ")
    .filter((e) => e !== "")
    .reverse()
    .join(" ");
}

console.log(reverseWords("  hello world  "));

// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
