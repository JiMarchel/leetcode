function fizzBuzz(n: number): string[] {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 15 === 0:
        answer.push("FizzBuzz");
        break;
      case i % 3 === 0:
        answer.push("Fizz");
        break;
      case i % 5 === 0:
        answer.push("Buzz");
        break;
      default:
        answer.push(i.toString());
    }
  }
  return answer;
}

// https://leetcode.com/problems/fizz-buzz/
