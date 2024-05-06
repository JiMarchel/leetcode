function isValid(s: string) {
  const stack = [];
  const parens = "() [] {}";
  let i = 0;

  while (i < s.length) {
    stack.push(s[i]);
    i++;

    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];

    let potParenst = open + closed;

    if (parens.includes(potParenst)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(isValid("(]"));
