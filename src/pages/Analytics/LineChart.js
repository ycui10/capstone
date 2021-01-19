import { Chart, Line, Point, Tooltip, Axis } from "bizcharts";

const LineChart = ({ data, turn }) => {
  const arr = [...data];
  if (turn) {
    arr.reverse();
  }

  return (
    <Chart
      padding={[10, 20, 50, 50]}
      autoFit
      height={400}
      scale={
        turn
          ? { value: { min: 0 }, x: { range: [0, 1] } }
          : { value: { min: 0 }, xaxis: { range: [0, 1] } }
      }
      data={arr}
    >
      <Line color="#EC8B5E" position={turn ? "x*value" : "xaxis*value"} />
      <Point color="#EC8B5E" position={turn ? "x*value" : "xaxis*value"} />
      <Tooltip showCrosshairs />
      <Axis name="value" line={{ visible: true, style: { stroke: "#bbb" } }} />
    </Chart>
  );
};
export default LineChart;
