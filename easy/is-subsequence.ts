const isSubsequence = (s: string, t: string) => {
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) j++;
  }
  return j === s.length;
};
