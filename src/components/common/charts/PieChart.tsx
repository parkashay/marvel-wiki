import Chart, { GoogleChartOptions } from "react-google-charts";

function PieChart({ characters }: { characters: [string, number][] }) {
  const data = [["Character", "Appearances"], ...characters];
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
      width="100%"
      height="700px"
    />
  );
}

export default PieChart;
