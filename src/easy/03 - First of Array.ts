// solution
type First<T extends any[]> = T extends [] ? never : T[0];

// usage
type arr1 = ["a", "b", "c"];
type head1 = First<arr1>;

let head_1: head1 = "a";
