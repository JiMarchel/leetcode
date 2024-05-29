// function canConstruct(ransomNote: string, magazine: string): boolean {
//   const magazineChars = new Map<string, number>();
//   for (const char of magazine) {
//     if (magazineChars.has(char)) {
//       magazineChars.set(char, magazineChars.get(char)! + 1);
//     } else {
//       magazineChars.set(char, 1);
//     }
//   }
//
//   for (const char of ransomNote) {
//     if (magazineChars.get(char)) {
//       magazineChars.set(char, magazineChars.get(char)! - 1);
//     } else {
//       return false;
//     }
//   }
//
//   return true;
// }
function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineArr = [...magazine];
  return [...ransomNote].every((item) => {
    const index = magazineArr.indexOf(item);
    if (index !== -1) {
      delete magazineArr[index];
      return true;
    }
    return false;
  });
}

console.log(canConstruct("aab", "aab"));

// https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150
