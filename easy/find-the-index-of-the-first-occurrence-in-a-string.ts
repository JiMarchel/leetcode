function strStr(haystack: string, needle: string) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, needle.length) === needle) {
      return i;
    }
  }
  return -1;
}

console.log(strStr("sadButsad", "sad"));
