const reverseWords = (s: string) =>
  s
    .split(" ")
    .map((s) => s.split(""))
    .map((s) => s.reverse().join(""))
    .join(" ");

console.log(reverseWords("Let's take LeetCode contest"));
