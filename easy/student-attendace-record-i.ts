function checkRecord(s: string): boolean {
  let absent = 0;
  let ldays = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "A") {
      absent++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "L") {
      ldays += 1;
      if (ldays >= 3) {
        return false;
      }
    } else {
      ldays = 0;
    }
  }
  return absent < 2;
}

console.log(checkRecord("LALL"));

// https://leetcode.com/problems/student-attendance-record-i/
