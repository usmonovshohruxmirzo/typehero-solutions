// solution
type If<C extends boolean, T, F> = C extends true ? T : F;

// usage
type A = If<true, "a", "b">;
const a: A = "a";
