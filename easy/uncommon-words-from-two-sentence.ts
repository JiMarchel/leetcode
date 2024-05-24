function uncommonFromSentences(s1: string, s2: string): string[] {
  const s = s1 + " " + s2;
  const arr = s.split(" ");
  const mapp = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (mapp.has(arr[i])) {
      mapp.set(arr[i], mapp.get(arr[i]) + 1);
    } else {
      mapp.set(arr[i], 0);
    }
  }
  return Array.from(mapp)
    .filter((e) => e[1] === 0)
    .map((v) => v[0]);
}

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));

// https://leetcode.com/problems/uncommon-words-from-two-sentences/
