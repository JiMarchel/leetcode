const detectCapitalUse = (word: string) =>
  word.toUpperCase() == word || word.toLowerCase() == word
    ? true
    : word[0] + word.slice(1).toLowerCase() == word
      ? true
      : false;

console.log(detectCapitalUse("USA"));

// https://leetcode.com/problems/detect-capital/
