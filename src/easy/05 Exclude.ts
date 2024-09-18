// solution
type MyExclude<T, U> = Exclude<T, U>;

// usage
type Result = MyExclude<"a" | "b" | "c", "a">;

let exclude: Result = "b";
