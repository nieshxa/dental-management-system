const bar = document.getElementById("appt-chart");

new Chart(bar, {
  type: "bar",
  data: {
    labels: ["All", "Confirmed", "Pending", "Cancelled", "Previous"],
    datasets: [
      {
        label: "Appointments Chart",
        data: [20, 5, 9, 7, 4, 3],
        borderWidth: 1,
        backgroundColor: [
          "rgb(54, 162, 235)",
          // "rgb(255, 99, 132)",
          // "rgb(75,192,192)",
          // "rgb(255, 205, 86)",
          // "rgb(153,102,255)",
          // "rgb(255,159,64)",
        ],
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const pie = document.getElementById("services-chart");

new Chart(pie, {
  type: "pie",
  data: {
    labels: ["All", "Confirmed", "Pending", "Cancelled", "Previous"],
    datasets: [
      {
        label: "Appointments Chart",
        data: [20, 5, 9, 7, 4, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
