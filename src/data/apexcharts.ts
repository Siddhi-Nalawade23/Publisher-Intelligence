import type { ApexOptions } from "apexcharts";

export const chapterEngagement = [
  57, 71, 64, 91, 76, 60, 52, 45, 34, 28, 24, 20, 9, 7, 5, 3,
];

const categories = chapterEngagement.map((_, i) => String(i + 1));

const high = chapterEngagement.map((v) => (v > 50 ? v : 0));

const partial = chapterEngagement.map((v) => (v >= 10 && v <= 50 ? v : 0));

const barely = chapterEngagement.map((v) => (v < 10 ? v : 0));

export const series = [
  {
    name: "Opened by more than half the cohort",
    data: high,
  },
  {
    name: "Partial reach",
    data: partial,
  },
  {
    name: "Barely opened — on the syllabus",
    data: barely,
  },
];

export const options: ApexOptions = {
  chart: {
    type: "bar",
    stacked: true,
    toolbar: { show: false },
    animations: { enabled: true },
    fontFamily: "inherit",
  },

  colors: ["var(--navy)", "#5b7bb0", "#c9ccd4"],

  plotOptions: {
    bar: {
      columnWidth: "92%",
      borderRadius: 3,
      borderRadiusApplication: "end",
    },
  },

  fill: {
    type: ["solid", "solid", "pattern"],
    pattern: {
      style: "slantedLines",
      width: 6,
      height: 6,
      strokeWidth: 2,
    },
  },

  stroke: {
    show: false,
  },

  dataLabels: {
    enabled: false,
  },

  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
    },
  },

  xaxis: {
    categories,

    axisBorder: {
      show: false,
    },

    axisTicks: {
      show: false,
    },

    labels: {
      style: {
        colors: "#9aa0b4",
        fontSize: "11px",
      },
    },
  },

  yaxis: {
    show: false,
    max: 100,
  },

  legend: {
    position: "bottom",
    horizontalAlign: "left",
    fontSize: "12px",

    labels: {
      colors: "#3a4160",
    },

    markers: {
      size: 6,
      shape: "square" as const,
      offsetX: -2,
    },

    itemMargin: {
      horizontal: 10,
    },
  },

  tooltip: {
    shared: false,

    custom: ({ dataPointIndex }) => {
      const v = chapterEngagement[dataPointIndex];

      return `
                <div style="padding:8px 10px;font-size:12px">
                    Chapter ${dataPointIndex + 1}: <b>${v}%</b> opened
                </div>
            `;
    },
  },
};
