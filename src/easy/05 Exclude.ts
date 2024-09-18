// solution
// type MyExclude<T, U> = Exclude<T, U>; // 1
type MyExclude<T, U> = T extends U ? never : T; // 2

// usage
type Result = MyExclude<"a" | "b" | "c", "a">;

let exclude: Result = "b";
