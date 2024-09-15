type AllowString<String extends string> = string;
type AllowNumber<Number extends number> = number;

type FunctionConstraint = (a: number) => void;

type CreateLogger<LoggerFunction extends FunctionConstraint> = {
  log: LoggerFunction;
  exit: () => void;
};
