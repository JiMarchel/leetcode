function findTheDifference(s: string, t: string): string {
  for (const letter of s) {
    t = t.replace(letter, "");
  }
  return t;
}

console.log(findTheDifference("abcd", "abcds"));
