import { Chart, Tooltip, Axis, Interval, Coordinate, Legend } from "bizcharts";

const cols = {
  percent: {
    formatter: (val) => {
      val = val * 100 + "%";
      return val;
    },
  },
};

const PieChart = ({ data, turn }) => {
  const arr = [...data];
  if (turn) {
    arr.reverse();
  }

  return (
    <Chart height={400} data={arr} scale={cols} autoFit>
      <Coordinate type="theta" radius={0.75} />
      <Tooltip showTitle={false} />
      <Axis visible={false} />
      <Legend visible={false} />
      <Interval
        position="percent"
        adjust="stack"
        color={["item", ["#EC8B5E", "#EECC88", "#141A46", "#DADADA"]]}
        style={{
          lineWidth: 1,
          stroke: "#fff",
        }}
        label={[
          "count",
          {
            content: (data) => {
              return `${data.item}: ${data.percent * 100}%`;
            },
          },
        ]}
      />
    </Chart>
  );
};
export default PieChart;
