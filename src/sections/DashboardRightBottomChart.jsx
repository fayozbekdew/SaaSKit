import ReactApexChart from "react-apexcharts";
import React from "react";

export default function DashboardRightBottomChart() {
  const [state, setState] = React.useState({
    series: [60, 30, 10],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      colors: ["#2ED47A", "#F7685B", "#FFB946"],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          donut: {
            size: "85%",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (_, opts) {
          const labels = ["Active", "Completed", "Ended"];
          return labels[opts.seriesIndex];
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="relative">
      {" "}
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width={320}
      />
      <div className="absolute top-[55%] left-[30%] translate-x-[-30%] translate-y-[-55%] text-green text-2xl font-semibold">
        {state.series[0]}%
      </div>
    </div>
  );
}
