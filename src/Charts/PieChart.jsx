import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PieChart = ({ data, title }) => {
  const chartData = {
    labels: ["Open", "High", "Low", "Close"],
    datasets: [
      {
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="pie-chart">
      <h2>{title}</h2>
      <Pie
        data={chartData}
        options={{
          scales: {
            y: {
              type: "linear",
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
