const firstUniqChar = (s: string) => {
  const freqMap: Record<string, number> = {};

  for (const char of s) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; ++i) {
    if (freqMap[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("leetcodel"));
