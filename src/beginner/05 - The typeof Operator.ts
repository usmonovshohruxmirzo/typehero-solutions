const height = 500;
const width = 700;

type Width = typeof width;
type Margin = { top: number; right: number; bottom: number; left: number };
type Data = { category: string; value: number }[];
type Scale = {
  type: string;
  domain: number[];
  range: number[];
};
type YScale = Scale;
type Axis = {
  label: string;
  tickSize: number;
};
type D3ChartConfig = {
  width: number;
  height: number;
  margin: Margin;
  data: Data;
  xScale: Scale;
  yScale: Scale;
  xAxis: Axis;
  yAxis: Axis;
  bar: {
    fill: string;
  };
};
