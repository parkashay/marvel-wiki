import Chart, { GoogleChartOptions } from "react-google-charts";

function PieChart({ dataa }: { dataa: [string, number][] }) {
  const data = [["Character", "Appearances"], ...dataa];
  const options: GoogleChartOptions = {
    is3D: true,
    backgroundColor: "transparent",
    legend: {
      position: "labeled",
      textStyle: { color: "white" },
    },
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      height={"100%"}
      width={"100%"}
    />
  );
}

export default PieChart;
