
export const mapBarChart = (label: string, labels: any, data: any) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "Ventes 2024",
        data: data,
        backgroundColor: [
          "rgba(198, 209, 255)",
          "rgba(163, 179, 254)",
          "rgba(127, 138, 250)",
          "rgba(96, 99, 244)",
          "rgba(77, 67, 232)",
          "rgba(65, 53, 205)",
        ],
        borderColor: [
          "rgb(198, 209, 255)",
          "rgb(163, 179, 254)",
          "rgb(127, 138, 250)",
          "rgb(96, 99, 244)",
          "rgb(77, 67, 232)",
          "rgb(65, 53, 205)",
        ],
        borderWidth: 5,
        borderRadius: 15,
        barThickness: 20,
        borderSkipped: false,
      },
    ],
  };
};

export const mapDoughnutChart = (labels: any, data: any) => {
  return {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "rgba(198, 209, 255)",
          "rgba(163, 179, 254)",
          "rgba(127, 138, 250)",
          "rgba(96, 99, 244)",
          "rgba(77, 67, 232)",
          "rgba(65, 53, 205)",
        ],
        borderColor: [
          "rgb(198, 209, 255)",
          "rgb(163, 179, 254)",
          "rgb(127, 138, 250)",
          "rgb(96, 99, 244)",
          "rgb(77, 67, 232)",
          "rgb(65, 53, 205)",
        ],
        borderWidth: 0,
        hoverOffset: 10,
        spacing : 5
      },
    ],
  }}
