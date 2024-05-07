function romanToInt(s: string) {
  const translation: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let number = 0;
  s = s.replace("IV", "IIII").replace("IX", "VIIII");
  s = s.replace("XL", "XXXX").replace("XC", "LXXXX");
  s = s.replace("CD", "CCCC").replace("CM", "DCCCC");

  for (let i = 0; i < s.length; i++) {
    number += translation[s[i]];
  }
  return number;
}

console.log(romanToInt("MCMXCIV"));
