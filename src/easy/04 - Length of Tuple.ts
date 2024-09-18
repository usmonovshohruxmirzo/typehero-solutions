// solution
type Length<T extends readonly string[]> = T["length"];

// usage
type tesla = ["tesla", "model 3", "model X", "model Y"];
type teslaLength = Length<tesla>;

let tesla_length: teslaLength = 4;
