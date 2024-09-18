// solution
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer Inner>
  ? Inner extends PromiseLike<any>
    ? MyAwaited<Inner>
    : Inner
  : never; // 1

// type MyAwaited<T> = Awaited<T>; //2

// usage
type ExampleType = Promise<string>;
type result = MyAwaited<ExampleType>;

let type: result = "hello";
