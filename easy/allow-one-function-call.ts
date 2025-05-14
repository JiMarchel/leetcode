type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
  let called = false; 

  return function (...args) {
    if (called) return undefined;
    called = true;
    return fn(...args);
  };
}

let onceFn = once((a,b,c) => (a + b + c))
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn
