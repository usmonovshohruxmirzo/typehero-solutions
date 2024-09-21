// solution
type ReadonlyUnkown = Readonly<Array<unknown>>;
type Concat<T extends ReadonlyUnkown, U extends ReadonlyUnkown> = [...T, ...U];

// usage
type Result1 = Concat<[1], [2]>;

const result1: Result1 = [1, 2];
