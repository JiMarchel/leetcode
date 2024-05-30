function removeDuplicates(s: string): string {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const cv = s[i];
    const top: string = stack[stack.length - 1];

    if (cv === top) stack.pop();
    else stack.push(cv);
  }
  return stack.join("");
}

console.log(removeDuplicates("azxxzy"));

// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
