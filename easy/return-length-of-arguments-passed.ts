type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

const argumentsLength = (...args: JSONValue[]): number => args.length;


console.log(argumentsLength(53,535,3,214,24,25,6,2,[3,2]))
