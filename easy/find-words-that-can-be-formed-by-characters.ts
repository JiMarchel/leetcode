function countCharacters(words: string[], chars: string): number {
  const arr = [];

  for (const word of words) {
    let matchingChars = 0;
    let availableChars = chars;
    for (const char of word) {
      if (availableChars.includes(char)) {
        availableChars = availableChars.replace(char, "");
        matchingChars++;
      }
    }

    if (matchingChars === word.length) {
      arr.push(word);
    }
  }
  return arr.join("").length;
}

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
