const identity: <T>(n: T) => T = (n) => n;
const mapArray: <T, U>(arr: T[], fn: (str: T) => U) => U[] = (arr, fn) =>
  arr.map(fn);
