function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const strx = String(x);
  return strx === strx.split("").reverse().join("");
}

console.log(isPalindrome(1121));
