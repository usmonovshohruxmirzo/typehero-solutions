const identity: <T>(n: T) => T = (n) => n;

const mapArray: <T, U>(arr: T[], fn: (str: T) => U) => U[] = (arr, fn) =>
  arr.map(fn);

const identityResult = identity<number>(5);

const numbers = [1, 2, 3, 4, 5];
const doubled = mapArray<number, number>(numbers, (n) => n * 2);
