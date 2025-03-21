import React from "react";
import ReactApexChart from "react-apexcharts";

function DashboardRightTop() {
  const [state, setState] = React.useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51],
      },
    ],
    options: {
      chart: {
        height: 150,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: ["1 dec", "8 dec", "16 dec", "31 dec"],
      },
    },
  });

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="area"
      height={220}
    />
  );
}

export default DashboardRightTop;
