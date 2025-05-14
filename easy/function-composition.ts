type F = (x: number) => number;

function compose(functions: F[]): F {
      return function(x) {
        functions.reverse().forEach((fn => {
            x = fn(x)
        }))
        return x
    }
};

const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x])
console.log(fn(4))
