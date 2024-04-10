import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables); // Register all components

const LineGraph = ({ data, title }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const chartData = {
    labels: data.map((d) => formatDate(d[1])),
    datasets: [
      {
        // label: "OHLC Data",
        data: data.map((d) => d[0]), // Corrected mapping
        backgroundColor: ["rgba(255, 99, 132, 1)"],
        borderColor: ["rgba(255, 99, 132, 0.5)"],
        borderWidth: 5,
      },
    ],
  };

  return (
    <div>
      <h2>{title}</h2>
      <Line
        data={chartData}
        options={{
          scales: {
            y: {
              type: "linear", // Set scale type explicitly
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
