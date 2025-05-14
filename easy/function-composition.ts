type F = (x: number) => number;

function compose(functions: F[]): F {
      return function(x) {
        functions.reverse().forEach((fn => {
            x = fn(x)
        }))
        return x
    }
};

console.log(compose([x => 10 * x, x => 10 * x, x => 10 * x]))
